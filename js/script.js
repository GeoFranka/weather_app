import { queryVisualCrossing } from "./queryVC.js";
import {
    setIcon,
    setLocation,
    setDescription,
    setTemperature,
    setPrecipitation,
 } from "./displayData.js";

let currentLocation;

async function showWeather(searchTerm = 'Berlin', unitGroup = 'metric') {
    try{
        const weatherData = await queryVisualCrossing(searchTerm, unitGroup);
        currentLocation = weatherData.location;
        setLocation(currentLocation);
        setDescription(weatherData.description);
        setIcon(weatherData.icon);
        setTemperature(weatherData.temp, weatherData.feelslike);
        setPrecipitation(weatherData.precipprob, weatherData.precip, weatherData.preciptype);
    } catch(e){
        console.error(e.message);
        setLocation(currentLocation);
    }
}

const location = document.querySelector('.location');
location.addEventListener('change', ()=>{
    showWeather(toCamelCase(location.value));
});

const toCamelCase = function(string){
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
};

showWeather();