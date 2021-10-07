"use strict";

const navbar = document.querySelector("nav");
const main = document.querySelector("main");
const logo = document.querySelector(".logo");
const links = document.querySelectorAll(".link");
const linkWrapper = document.querySelector(".link-wrapper");
const menuIcon = document.querySelector(".menu-icon");

if (window.innerWidth > 320) {
	window.onscroll = function () {
		if (window.scrollY >= 600) {
			navbar.style.backgroundColor = "#0F1B2E";
			logo.setAttribute("src", "./assets/vectors/logo_light.svg");
			links.forEach((link) => {
				link.classList.add("active");
			});
		} else if (window.scrollY < 600) {
			navbar.style.backgroundColor = "transparent";
			logo.setAttribute("src", "./assets/vectors/logo_dark.svg");
			links.forEach((link) => {
				link.classList.remove("active");
			});
		}
	};
} else if (window.innerWidth <= 320) {
	window.onscroll = function () {
		if (window.scrollY >= 400) {
			navbar.style.backgroundColor = "#0F1B2E";
			logo.setAttribute("src", "./assets/vectors/logo_light.svg");
			links.forEach((link) => {
				link.classList.add("active");
			});
			menuIcon.style.color = "#eff7fb";
		} else if (window.scrollY < 400) {
			navbar.style.backgroundColor = "transparent";
			logo.setAttribute("src", "./assets/vectors/logo_dark.svg");
			links.forEach((link) => {
				link.classList.remove("active");
			});
			menuIcon.style.color = "unset";
		}
	};
}
