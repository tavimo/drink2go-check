/*Меню навигации*/
const mainHeaderList = document.querySelector('.main-header__list');
const toggleButton = document.querySelector('.js-toggle-button');

toggleButton.onclick = function() {
  mainHeaderList.classList.toggle('main-header__list--open');
  mainHeaderList.classList.toggle('main-header__list--close');
  toggleButton.classList.toggle('main-header__toggle--close');
  toggleButton.classList.toggle('main-header__toggle--open');
};

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mainHeaderList.classList.add('main-header__list--close');
    mainHeaderList.classList.remove('main-header__list--open');
  }
});

/*Слайдер*/
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const slides = Array.from(slider.querySelectorAll('.slider__container'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Предыдущий слайд
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Следующий слайд
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Отображение нового слайда
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  prevButton.disabled = slideIndex === 0;
  nextButton.disabled = slideIndex === slideCount - 1;
}

updateSlider();
