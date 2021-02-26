// кнопка бургер
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
