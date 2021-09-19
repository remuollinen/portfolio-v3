"use strict";

const navbar = document.querySelector("nav");
const main = document.querySelector("main");
const logo = document.querySelector(".logo");
const links = document.querySelectorAll(".link");

window.onscroll = function () {
	if (window.scrollY >= 672) {
		navbar.style.backgroundColor = "#0F1B2E";
		logo.setAttribute("src", "./assets/vectors/logo_light.svg");
		links.forEach((link) => {
			link.classList.add("active");
		});
	} else if (window.scrollY < 672) {
		navbar.style.backgroundColor = "transparent";
		logo.setAttribute("src", "./assets/vectors/logo_dark.svg");
		links.forEach((link) => {
			link.classList.remove("active");
		});
	}
};
