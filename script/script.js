const toggle = document.querySelector("#theme");
const switchButton = document.querySelector(".theme-toggle");
const body = document.querySelector('body');
const main = document.querySelector('main');
const mainCards = document.querySelectorAll('.social-card');
const userColor = document.querySelectorAll('.users-engaged');

$(document).ready(function() {
    $(toggle).change(function() {
        $(body).toggleClass('dark-main');
        $(switchButton).toggleClass('active-switch');
        $(userColor).each(function() {
            $(this).toggleClass('font-color');
        })
    })
})