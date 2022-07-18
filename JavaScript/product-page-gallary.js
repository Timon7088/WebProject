'use strict'

const imgs = document.querySelectorAll('.img_select a')
const imgBtns = [ ...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) =>{
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        sliderImage();
    });
});

function sliderImage() {
    let displayWidth = document.querySelector('.img_showcase img:first-child').clientWidth;

    document.querySelector('.img_showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;

}
