// Next Button
const imageBox = document.querySelector('.image-box');
const images = document.querySelectorAll(".image-box img");
let currentImage = 0;

// When Click Next Button
const rightArrowBtn = document.querySelector(".right-arrow");
rightArrowBtn.addEventListener("click", () => {
    currentImage++;
    if(currentImage >= images.length){
        currentImage = 0;
    }
    updateSlide();
}); 

// When Click previous Button 
const leftArrowBtn = document.querySelector(".left-arrow");
leftArrowBtn.addEventListener('click', () => {
    currentImage--;
    if(currentImage < 0) {
        currentImage = images.length - 1;
    }
    updateSlide();
})

// update slide 
function updateSlide() {
    const width = document.querySelector(".slider-box").clientWidth;
    console.log(width);
    imageBox.style.transform = `translateX(-${currentImage * width}px)`;
}