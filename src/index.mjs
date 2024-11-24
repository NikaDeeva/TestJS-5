// "use strict"
// import { nanoid } from 'nanoid';
// const id = nanoid(5);
// console.log(id);
// import {success, notice, info, error, defaultModules} from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';
// defaultModules.set(PNotifyMobile, {});
// alert({
//     text: 'Hello'
// });
// const mySuccess = success({
//     text: 'Operation done',
//     dalay: 3000
// });
// const myNotice = notice({
//     text: 'Operation done'
// });
// const myInfo = info({
//     text: 'Operation done'
// });
// const myError = error({
//     text: 'Operation done'
// });

// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
// const date = {
//     labels: ['januery', 'february', 'march', 'april', 'may', 'june', 'july'],
//     datasets: [{
//         label: 'temp',
//         data: [15, 16, 17, 18, 20, 22, 23],
//         fill: false,
//         borderColor: '#F1F1F1',
//         tension: 0.1,
//     }],
// };
// const config = {
//     type: 'line',
//     data: date,
//     options: {}
// };
// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.querySelector('#myChart').getContext('2d');
//     new Chart(a, config);
// })

// import * as basicLightBox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// const image = '<img src="https://images.pexels.com/photos/16330147/pexels-photo-16330147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" width="500">'
// const show = basicLightBox.create(image);
// document.getElementById('open').addEventListener('click', () => {
// show.show();
// });

import { success, notice, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

const keys = ['u', 'g', 'h', 'j', 'z', 's', 'i', 'f', 'w', 'n'];
let currentKeyIndex = 0;
let points = 0; 

const btn = document.querySelector('#update');
const keyElement = document.querySelector('#key');
const pointsElement = document.querySelector('#points');

keyElement.textContent = keys[currentKeyIndex];
pointsElement.textContent = points;

document.addEventListener('keydown', (event) => {
    if (event.key === keys[currentKeyIndex]) {
        success({ text: 'Good job!' }); 
        points++; 
        currentKeyIndex++; 

        if (currentKeyIndex >= keys.length) {
            currentKeyIndex = 0;
            notice({ text: 'You completed the sequence! Starting over' });
        }
        keyElement.textContent = keys[currentKeyIndex];
        pointsElement.textContent = points;
    } else {
        error({ text: 'Try again!' }); 
    }
});
btn.addEventListener('click', () => {
    currentKeyIndex = 0; 
    points = 0; 
    keyElement.textContent = keys[currentKeyIndex]; 
    pointsElement.textContent = points; 

    notice({ text: 'You have started again' }); 
});
