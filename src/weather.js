
import { displayManager } from "./display";
import { format } from "date-fns";

class Day {
  constructor(temp, tempmax, tempmin, conditions, date, icon){
    this.temp = temp
    this.tempmax = tempmax
    this.tempmin = tempmin
    this.conditions = conditions
    this.date = date
    this.icon = icon

  }
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=F32ZMZMYPQ9ZG59CW3SPDKBMZ&contentType=json`,
    );
    const weatherData = await response.json()
    return weatherData
  } catch (error) {
    console.log(error);
    alert("invalid input")
  }
}

async function getDay (location) {
  try {

    displayManager.daysObjects.length = 0;

    const response = await getWeather(location)
  
    for (let i = 0; i < 3; i++) {    
      const temp = convertFah(response.days[i].temp)
      const tempmax = convertFah(response.days[i].tempmax)
      const tempmin = convertFah(response.days[i].tempmin)
      const conditions = response.days[i].conditions
      const date = format(response.days[i].datetime,"dd/MM")
      const icon = response.days[i].icon

      const day = new Day(temp, tempmax, tempmin, conditions, date, icon);
      displayManager.daysObjects.push(day)
      
    } 
    displayManager.dayDisplay()
  } catch (error){
    console.log(error);
  }
}

function convertFah(F){
  return Math.round((F - 32) / (9/5))
}
//add swtich for fah and cel

export {getDay}