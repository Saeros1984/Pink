var navMain = document.querySelector(".main-navigation");
var menuMain = document.querySelector(".page-header__menu");
var navToggle = document.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function() {
if (navMain.classList.contains("main-navigation--closed")) {
  navMain.classList.remove("main-navigation--closed");
  navMain.classList.add("main-navigation--opened");
  menuMain.classList.remove("page-header__menu--closed");
  menuMain.classList.add("page-header__menu--opened");
} else {
  navMain.classList.add("main-navigation--closed");
  navMain.classList.remove("main-navigation--opened");
  menuMain.classList.add("page-header__menu--closed");
  menuMain.classList.remove("page-header__menu--opened");
}
});
