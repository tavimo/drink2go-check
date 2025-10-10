// source/scripts/index.js
var mainHeaderList = document.querySelector(".main-header__list");
var toggleButton = document.querySelector(".js-toggle-button");
toggleButton.onclick = function() {
  mainHeaderList.classList.toggle("main-header__list--open");
  mainHeaderList.classList.toggle("main-header__list--close");
  toggleButton.classList.toggle("main-header__toggle--close");
  toggleButton.classList.toggle("main-header__toggle--open");
};
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mainHeaderList.classList.add("main-header__list--close");
    mainHeaderList.classList.remove("main-header__list--open");
  }
});
var slider = document.querySelector(".slider");
var prevButton = document.querySelector(".slider-button-prev");
var nextButton = document.querySelector(".slider-button-next");
var slides = Array.from(slider.querySelectorAll(".slider__container"));
var slideCount = slides.length;
var slideIndex = 0;
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  prevButton.disabled = slideIndex === 0;
  nextButton.disabled = slideIndex === slideCount - 1;
}
updateSlider();
//# sourceMappingURL=index.js.map
