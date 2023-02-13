const toggle = document.querySelector("#theme");
const switchButton = document.querySelector(".theme-toggle");
const main = document.querySelector('main');

toggle.addEventListener('click', function () {
  if (main.classList.contains("dark-main")) {
    main.classList.add("dark-main");
  } else {
    main.classList.remove("dark-main");
  }
});