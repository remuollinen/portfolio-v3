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
			navbar.style.backgroundColor = "var(--dark)";
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
			navbar.style.backgroundColor = "var(--dark)";
			logo.setAttribute("src", "./assets/vectors/logo_light.svg");
			links.forEach((link) => {
				link.classList.add("active");
			});
			menuIcon.style.color = "var(--light)";
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

menuIcon.addEventListener("click", toggleMenu);
links.forEach((link) => link.addEventListener("click", toggleMenu));

function toggleMenu() {
	linkWrapper.classList.toggle("show");
	if (linkWrapper.classList.contains("show")) {
		setTimeout(darkNav, 270);
	} else {
		// transparentNav();
		setTimeout(transparentNav, 270);
	}
}

// These function change the styling of the navbar depending whether the mobile menu is open or not

function darkNav() {
	navbar.style.backgroundColor = "var(--dark)";
	logo.setAttribute("src", "./assets/vectors/logo_light.svg");
	menuIcon.style.color = "var(--light)";
}

function transparentNav() {
	if (window.scrollY < 400) {
		navbar.style.backgroundColor = "transparent";
		logo.setAttribute("src", "./assets/vectors/logo_dark.svg");
		menuIcon.style.color = "var(--dark)";
	}
}
