import queryVisualCrossing from "./queryVC.js";
import fillInData from "./displayData.js";
import { storageAvailable, saveLastLocation, getLastLocation } from "./localStorage.js";

const location = document.querySelector('.location');
const unitGroup = document.querySelector('#unitGroup');
const currentDiv = document.querySelector('.current');
let currentLocation;
if(storageAvailable('localStorage') && getLastLocation().length>0){
    currentLocation = getLastLocation();
} else {
    currentLocation = 'Berlin';
}

async function showWeather() {
    currentDiv.style.display = 'none';
    const searchTerm = location.value ? toCamelCase(location.value) : currentLocation;
    const unitGroupVal = unitGroup.value;
    try{
        const weatherData = await queryVisualCrossing(searchTerm, unitGroupVal);
        currentLocation = weatherData.location;
        saveLastLocation(currentLocation);
        fillInData(weatherData);
    } catch(e){
        console.error(e.message);
        setLocation(currentLocation);
    } finally {
        currentDiv.style.display = 'flex';
    }
}

location.addEventListener('change', showWeather);
unitGroup.addEventListener('change', showWeather);

const toCamelCase = function(string){
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
};

showWeather();