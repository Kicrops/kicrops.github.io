const input = document.querySelector("#input");
document.addEventListener("keydown", function (event) {
	// Check if the pressed key is Enter (key code 13)
	if (event.key === "Enter") {
		// Run your code here
		getWeather();
	}
});

function getWeather() {
	const city = input.value;
	const url = "https://api.weatherapi.com/v1/current.json?key=bf223e2824d3438ab7c163849231311&q=" + city;
	fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json(); // Parse the response data as JSON
			} else {
				throw new Error("API request failed");
			}
		})
		.then((data) => {
			// Extract and log each property individually
			const location = data.location;
			const current = data.current;

			function getHour(epoch, tz) {
				// Convert epoch timestamp to milliseconds
				const ms = epoch * 1000;
			  
				// Create a Date object with the timestamp
				const date = new Date(ms);
			  
				// Set the time zone
				date.toLocaleTimeString("en-US", { timeZone: tz });
			  
				// Get the formatted time
				const formattedTime = date.toLocaleTimeString("en-US", {
				  hour: "numeric",
				  minute: "2-digit",
				  timeZone: tz,
				});
			  
				return formattedTime;
			  }
			  
				
			document.querySelector(".img").src = current.condition.icon;
			document.querySelector(".name").textContent = location.name + ", ";
			document.querySelector(".region").textContent = location.region + ", ";
			document.querySelector(".country").textContent = location.country;
			document.querySelector(".temp").textContent = current.temp_c + "°C";
			document.querySelector(".weather").textContent = current.condition.text;
			document.querySelector(".humidity").textContent = current.humidity + "%";
			document.querySelector(".wind-speed").textContent = current.wind_kph + "km/h";
			document.querySelector(".wind-dir").textContent = current.wind_dir;

			let time = location.localtime_epoch - current.last_updated_epoch;
			time = time > 99 ? Math.floor(time / 60) + " minutes" : time + " seconds";

			document.querySelector(".time").textContent = "Updated " + getHour(current.last_updated_epoch, location.tz_id) + " (Local Time) - " + time + " ago ";
			const a = current.is_day === 0 ? "night" : "day";
			const b = current.is_day === 0 ? "day" : "night";

			document.querySelector(".container").classList.add(a);
			document.querySelector(".container").classList.remove(b);
			document.querySelector(".card").style.display = "block";
		})
		.catch((error) => {
			// Handle any errors here
			console.error(error); // Example: Logging the error to the console
			document.querySelector(".shwo").textContent = error;
		});
}
