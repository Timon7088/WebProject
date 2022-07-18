'use strict'
let slideShow = document.querySelector('.slide-show');
let carouselImages = document.querySelectorAll('.slide-show img')
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

let counter = 1;

const size = carouselImages[0].clientWidth;

slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click' ,() =>{
    if (counter >=  carouselImages.length - 1) return;
    slideShow.style.transition = "transform 0.2s ease-in-out";
    counter++;
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click' ,() =>{
    if (counter <= 0) return;
    slideShow.style.transition = "transform 0.2s ease-in-out";
    counter--;
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideShow.addEventListener('transitionend', () =>{
    if (carouselImages[counter].id === 'lastClone'){
        slideShow.style.transition = "none";
        counter = carouselImages.length - 2;
        slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        slideShow.style.transition = "none";
        counter = carouselImages.length - counter;
        slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});