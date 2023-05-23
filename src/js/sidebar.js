var sidebar = document.querySelector(".sidebar");
var overlay = document.querySelector(".overlay");
var headerIconMenu = document.querySelector(".header__icon-menu");
var sidebarButtonClose = sidebar.querySelector(".sidebar__button-close");

headerIconMenu.addEventListener("click", function () {
  sidebar.classList.add("sidebar-active");
  overlay.classList.add("overlay-left-menu");
});

sidebarButtonClose.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-active");
  overlay.classList.remove("overlay-left-menu");
});

overlay.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-active");
  overlay.classList.remove("overlay-left-menu");
});

var feedback = document.querySelector(".feedback");
var headerIconChat = document.querySelector(".header__icon-chat");
var contactsButtonChat = sidebar.querySelector(".contacts__button-chat");
var feedbackButtonClose = feedback.querySelector(".feedback__button-close");

contactsButtonChat.addEventListener("click", function () {
  feedback.classList.add("feedback-active");
  overlay.classList.add("overlay-right-menu");
});

headerIconChat.addEventListener("click", function () {
  feedback.classList.add("feedback-active");
  overlay.classList.add("overlay-right-menu");
});

feedbackButtonClose.addEventListener("click", function () {
  feedback.classList.remove("feedback-active");
  overlay.classList.remove("overlay-right-menu");
});

overlay.addEventListener("click", function () {
  feedback.classList.remove("feedback-active");
  overlay.classList.remove("overlay-right-menu");
});

var requestcall = document.querySelector(".requestcall");
var headerIconPhone = document.querySelector(".header__icon-call");
var contactsButtonPhone = sidebar.querySelector(".contacts__button-phone");
var requestcallButtonClose = requestcall.querySelector(
  ".requestcall__button-close"
);

contactsButtonPhone.addEventListener("click", function () {
  requestcall.classList.add("requestcall-active");
  overlay.classList.add("overlay-right-menu");
});

headerIconPhone.addEventListener("click", function () {
  requestcall.classList.add("requestcall-active");
  overlay.classList.add("overlay-right-menu");
});

requestcallButtonClose.addEventListener("click", function () {
  requestcall.classList.remove("requestcall-active");
  overlay.classList.remove("overlay-right-menu");
});

overlay.addEventListener("click", function () {
  requestcall.classList.remove("requestcall-active");
  overlay.classList.remove("overlay-right-menu");
});
