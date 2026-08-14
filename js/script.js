import { queryVisualCrossing } from "./queryVC.js";
import {
    setIcon,
    setLocation,
    setDescription,
    setTemperature,
    setPrecipitation,
    setWind,
    setAlerts,
    setNextDays,
 } from "./displayData.js";

const location = document.querySelector('.location');
const unitGroup = document.querySelector('#unitGroup');
let currentLocation = 'Berlin';

async function showWeather() {
    const searchTerm = location.value ? toCamelCase(location.value) : currentLocation;
    const unitGroupVal = unitGroup.value;
    try{
        const weatherData = await queryVisualCrossing(searchTerm, unitGroupVal);
        currentLocation = weatherData.location;
        setLocation(currentLocation);
        setDescription(weatherData.description);
        setIcon(weatherData.icon);
        setTemperature(weatherData.temp, weatherData.feelslike);
        setPrecipitation(weatherData.precipprob, weatherData.precip, weatherData.preciptype);
        setWind(weatherData.winddir, weatherData.windspeed);
        setAlerts(weatherData.alerts);
        setNextDays(weatherData.days);
    } catch(e){
        console.error(e.message);
        setLocation(currentLocation);
    }
}

location.addEventListener('change', showWeather);
unitGroup.addEventListener('change', showWeather);

const toCamelCase = function(string){
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
};

showWeather();