const userLang = navigator.language || navigator.userLanguage;

const intervalID = setInterval(updateClock, 1000);
const intervalIDC = setInterval(updateColons, 500);

function updateClock() {
	const now = new Date(Date.now());
	const hours = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();
	const minutes = now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes();
	const seconds = now.getSeconds() > 9 ? now.getSeconds() : "0" + now.getSeconds();

	document.querySelector(".hours").textContent = hours;
	document.querySelector(".minutes").textContent = minutes;
	document.querySelector(".seconds").textContent = seconds;

	document.querySelector(".dayotw").textContent = now.toLocaleString("default", { weekday: "long" });

	document.querySelector(".daynum").textContent = now.getDate() > 9 ? now.getDate() /*  + "th" */ : "0" + now.getDate() /*  + "th" */;
	//TODO add th for english only
	document.querySelector(".month").textContent = now.toLocaleString("default", { month: "long" });
	document.querySelector(".year").textContent = now.getFullYear();

	document.title = hours + ":" + minutes + " - Clock";
}

function updateColons() {
	document.querySelectorAll(".colon").forEach(function (colon) {
		if (colon.style.opacity === "1" || colon.style.opacity === "") {
			colon.style.setProperty("opacity", "0");
		} else {
			colon.style.setProperty("opacity", "1");
		}
	});
}



const colorPicker = document.querySelector("#color");
colorPicker.addEventListener("input", changeColor, false);
colorPicker.addEventListener("change", changeColor, false);

function changeColor(event) {
	let color = event.target.value;
	document.documentElement.style.setProperty("--color", color);
}
