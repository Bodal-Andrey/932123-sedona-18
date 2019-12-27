var navMain = document.querySelector(".main-nav");
var navButton = document.querySelector(".main-nav__button");

navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

navButton.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
    } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
    }
});

var reviewButton = document.querySelector(".review-emotions__button");
var reviewSent = document.querySelector(".modal-sent");
var sentButton = document.querySelector(".modal-sent__button");
var phone = document.querySelector("[name = phone]");
var email = document.querySelector("[name = email]");
var errorButton = document.querySelector(".modal-error__button");
var reviewError = document.querySelector(".modal-error");

reviewButton.addEventListener( "submit", function (evt) {
    if (!phone.value || !eMail.value) {
        evt.preventDefault();
        reviewError.classList.remove("modal-none");
        reviewError.classList.add("modal-show");
    } else {
        evt.preventDefault();
        reviewSent.classList.remove("modal-none");
        reviewSent.classList.add("modal-show");
    }  
});

errorButton.addEventListener( "click", function (evt) {
    evt.preventDefault();
    reviewError.classList.remove("modal-show");
    reviewError.classList.add("modal-none");
});

sentButton.addEventListener( "click", function (evt) {
    evt.preventDefault();
    reviewSent.classList.remove("modal-show");
    reviewSent.classList.add("modal-none");
});