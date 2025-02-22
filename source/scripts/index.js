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
