const burgerIcon = document.querySelector('.header__burger-icon');
const dekstopMenu = document.querySelector('.header__list');
burgerIcon.addEventListener('click', () => {
    dekstopMenu.classList.toggle('header__list_open');
    burgerIcon.classList.toggle('header__list_open');
});

