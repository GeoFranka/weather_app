import { queryVisualCrossing } from "./queryVC.js";
import { setIcon, setLocation, setDescription } from "./displayData.js";

async function showWeather() {
    const weatherData = await queryVisualCrossing();

    setLocation(weatherData.location);
    setDescription(weatherData.description);
    setIcon(weatherData.icon);    
}

showWeather();