// Next Button
const rightArrowBtn = document.querySelector(".right-arrow");
const imageBox = document.querySelector('.image-box');
const images = document.querySelectorAll('img');
let currentImage = 1;


rightArrowBtn.addEventListener("click", () => {
    if(currentImage > images.length){
        currentImage = 1;
    }
    currentImage++;
    imageBox.style.transform = `translateX(-${(currentImage - 1) * 700}px)`;
}); 