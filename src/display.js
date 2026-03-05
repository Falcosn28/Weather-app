
import clearDay from "./images/clear-day.svg";
import clearNight from "./images/clear-night.svg";
import cloudy from "./images/cloudy.svg";
import fog from "./images/fog.svg";
import partlyCloudyDay from "./images/partly-cloudy-day.svg";
import partlyCloudyNight from "./images/partly-cloudy-night.svg";
import rain from "./images/rain.svg";
import snow from "./images/snow.svg";
import wind from "./images/wind.svg";



function display () {

  const locationEl = document.querySelector(".location")

  let daysObjects = []

  function dayDisplay () {
    const daysFolder = document.querySelector(".cards")

    daysFolder.innerHTML = "";
    
    for (let i = 0; i < daysObjects.length; i++) {

      const dayBox = document.createElement("div")
      dayBox.className = "dayCard";

      const weatherIcon = document.createElement("img")
      weatherIcon.className = "weatherIcon";
      weatherIcon.src = weatherUI(daysObjects[i].icon, dayBox)

      const dayDate = document.createElement("div")
      dayDate.innerHTML = daysObjects[i].date

      const dayConditions = document.createElement("div")
      dayConditions.innerHTML = daysObjects[i].conditions

      const dayDatebox = document.createElement("div")
      dayDatebox.className = "dayDatebox"
      dayDatebox.appendChild(dayDate)
      dayDatebox.appendChild(weatherIcon)
      dayDatebox.appendChild(dayConditions)

      const tempboxMin = document.createElement("p")
      tempboxMin.innerText = "min";

      const tempboxMax = document.createElement("p")
      tempboxMax.innerText = "max";

      const daymintemp = document.createElement("div")
      daymintemp.innerHTML = `${daysObjects[i].tempmin}°`;

      const dayTemp = document.createElement("div")
      dayTemp.innerHTML = `${daysObjects[i].temp}°`;

      const dayMaxTemp = document.createElement("div")
      dayMaxTemp.innerHTML = `${daysObjects[i].tempmax}°`;

      const dayTempbox = document.createElement("div")
      dayTempbox.className = "dayTempbox";


      dayTempbox.appendChild(tempboxMin)
      dayTempbox.appendChild(daymintemp)
      dayTempbox.appendChild(dayTemp)
      dayTempbox.appendChild(dayMaxTemp)
      dayTempbox.appendChild(tempboxMax)

      dayBox.appendChild(dayDatebox)
      

      dayBox.appendChild(dayTempbox)

      daysFolder.appendChild(dayBox)

    }
  }

  function locationDisplay (newLocation) {
    locationEl.textContent = newLocation
  }

  function weatherUI (weather, day) {
    day.classList.remove("clear-night", "clear-day", "partly-cloudy-night", "partly-cloudy-day", "cloudy",
      "wind", "fog", "rain", "snow"
    );

    switch (weather) {
      case "clear-night":
        day.classList.add("clear-night");
        return clearNight;
      case "clear-day":
        day.classList.add("clear-day");
        return clearDay;
      case "partly-cloudy-night":
        day.classList.add("partly-cloudy-night");
        return partlyCloudyNight;
      case "partly-cloudy-day":
        day.classList.add("partly-cloudy-day");
        return partlyCloudyDay;
      case "cloudy":
        day.classList.add("cloudy");
        return cloudy;
      case "wind":
        day.classList.add("wind");
        return wind;
      case "fog":
        day.classList.add("fog");
        return fog;
      case "rain":
        day.classList.add("rain");
        return rain;
      case "snow":
        day.classList.add("snow");
        return snow;
    }
  }

  return {daysObjects, dayDisplay, locationDisplay}
}

const displayManager = display()



export {displayManager}