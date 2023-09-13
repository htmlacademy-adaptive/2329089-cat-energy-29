let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    navToggle.setAttribute('aria-label', 'Закрыть меню');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    navToggle.setAttribute('aria-label', 'Открыть меню');
  }
});
