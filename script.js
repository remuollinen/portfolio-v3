"use strict";

import "./node_modules/@fortawesome/fontawesome-free/js/all";

const navbar = document.querySelector("nav");
const logo = document.querySelector(".logo");
const links = document.querySelectorAll(".link");
const linkWrapper = document.querySelector(".link-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const backToTopBtn = document.getElementById("back-to-top");
const scrollTarget = document.querySelector("footer");

// Changes navbar, logo and menu buttons color depending on scroll position

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

// Function to show and hide back-to-top button, this shows it when intersecting with 'footer' element

function scrollCallback(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			backToTopBtn.style.opacity = 1;
		} else {
			backToTopBtn.style.opacity = 0;
		}
	});
}
let observer = new IntersectionObserver(scrollCallback);
observer.observe(scrollTarget);

// Event listeners

menuIcon.addEventListener("click", toggleMenu);

links.forEach((link) => link.addEventListener("click", toggleMenu));

backToTopBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// Handler functions

// Opens and closes mobile menu

function toggleMenu() {
	linkWrapper.classList.toggle("show");
	if (linkWrapper.classList.contains("show")) {
		setTimeout(darkNav, 270);
	} else {
		setTimeout(transparentNav, 270);
	}
}

// These functions change the styling of the navbar depending whether the mobile menu is open or not

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
