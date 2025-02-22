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
// Получаем элементы слайдера

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const slides = Array.from(slider.querySelectorAll('.slider__container'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  prevButton.disabled = slideIndex === 0; // Блокируем кнопку "Назад", если это первый слайд
  nextButton.disabled = slideIndex === slideCount - 1;
}

// Инициализация слайдера
updateSlider();
