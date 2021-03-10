"use strict";
// Make Navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle Scrolling when tapping on the navbar

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoViews(link);
});
const homeContactMe = document.querySelector(".home__contact");
homeContactMe.addEventListener("click", () => {
  scrollIntoViews("#contact");
});

// ContactMe button
function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
