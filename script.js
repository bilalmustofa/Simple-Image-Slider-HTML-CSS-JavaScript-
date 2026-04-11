// Next Button
const rightArrowBtn = document.querySelector(".right-arrow");
const imageBox = document.querySelector('.image-box');
let currentImage = 1;

rightArrowBtn.addEventListener("click", () => {
    currentImage++;
    imageBox.style.transform = `translateX(-${(currentImage - 1) * 700}px)`;
});