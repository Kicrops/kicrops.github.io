const root = document.documentElement;
const button = document.getElementById("theme-btn");

const displayText = getComputedStyle(root).getPropertyValue("--text");

const darkText = getComputedStyle(root).getPropertyValue("--text-dark");
const darkBackground = getComputedStyle(root).getPropertyValue("--background-dark");
const darkSecondary = getComputedStyle(root).getPropertyValue("--secondary-dark");
const darkLi = getComputedStyle(root).getPropertyValue("--li-dark");

const lightText = getComputedStyle(root).getPropertyValue("--text-light");
const lightBackground = getComputedStyle(root).getPropertyValue("--background-light");
const lightSecondary = getComputedStyle(root).getPropertyValue("--secondary-light");
const lightLi = getComputedStyle(root).getPropertyValue("--li-light");

let mode = localStorage.getItem("mode") || "dark";

window.onload = function () {
	if (mode === "light") {
		root.style.setProperty("--text", lightText);
		root.style.setProperty("--background", lightBackground);
		root.style.setProperty("--secondary", lightSecondary);
		root.style.setProperty("--li", lightLi);
		localStorage.setItem("mode", "light");
	} else if (mode === "dark") {
		root.style.setProperty("--text", darkText);
		root.style.setProperty("--background", darkBackground);
		root.style.setProperty("--secondary", darkSecondary);
		root.style.setProperty("--li", darkLi);
		localStorage.setItem("mode", "dark");
	}
};

function changeButtonColor() {
	if (mode == "dark") {
		root.style.setProperty("--text", lightText);
		root.style.setProperty("--background", lightBackground);
		root.style.setProperty("--secondary", lightSecondary);
		root.style.setProperty("--li", lightLi);
		mode = "light";
		localStorage.setItem("mode", "light");
	} else if (mode == "light") {
		root.style.setProperty("--text", darkText);
		root.style.setProperty("--background", darkBackground);
		root.style.setProperty("--secondary", darkSecondary);
		root.style.setProperty("--li", darkLi);
		mode = "dark";
		localStorage.setItem("mode", "dark");
	}

	button.classList.toggle("rotated");
}

function contactButton() {
	alert("Still work in progress//Todavía en elaboración");
}
