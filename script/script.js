const toggle = document.querySelector("#theme");
const switchButton = document.querySelector(".theme-toggle");
const body = document.querySelector('body');
const main = document.querySelector('main');
const mainCards = document.querySelectorAll('.social-card')
const userColor = document.querySelectorAll('h1.users-engaged');

toggle.addEventListener('change', function () {
  body.classList.toggle('dark-main');
  switchButton.classList.toggle('active-switch');
  for (let i = 0; i < mainCards.length; i++) {
    mainCards[i].classList.toggle('text-white');
  }
});