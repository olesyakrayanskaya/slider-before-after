'use strict'
const root = document.querySelector(':root');
const style = getComputedStyle(root);
const value = style.getPropertyValue('--value');
const slider = document.querySelector('.slider');
const range = document.querySelector('.slider__range-js');

range.addEventListener('input', () => {
    root.style.setProperty('--value', `${range.value}%`);
});
