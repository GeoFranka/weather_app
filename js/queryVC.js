import { GROUPS } from './unitGroups.js';

const API_KEY = '9FNW4QMFS9KMZ42V6738TXB6C';

async function queryVisualCrossing(searchTerm = 'Berlin', unitGroup = 'metric'){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchTerm}?key=${API_KEY}&unitGroup=${unitGroup}`);
    const asJson = await response.json();
    return processData(asJson, unitGroup);
};

function processData(data, unitGroup){
    return {
        location: data.resolvedAddress,
        conditions: data.currentConditions.conditions,
        description: data.description,
        icon: data.currentConditions.icon,
        temp: addUnit(data.currentConditions.temp, 'temp', unitGroup),
        feelslike: addUnit(data.currentConditions.feelslike, 'temp', unitGroup),
        precip: addUnit(data.currentConditions.precip, 'precip', unitGroup),
        precipprob: addUnit(data.currentConditions.precipprob, 'probability', unitGroup),
        preciptype: data.currentConditions.preciptype ? data.currentConditions.preciptype.join("/") : "rain",
        snow: addUnit(data.currentConditions.snow, 'precip', unitGroup),
        winddir: getWindDirection(data.currentConditions.winddir),
        windspeed: addUnit(data.currentConditions.windspeed, 'windspeed', unitGroup),
        sunrise: data.currentConditions.sunrise,
        sunset: data.currentConditions.sunset,
        alerts: data.alerts,
        days: getNextDays(data, unitGroup, 5),
    };
};

function getNextDays(data, unitGroup, n = 3){
    let nextDays = [];
    for(let i=1; i<n+1; i++){
        const day = data.days[i];
        nextDays.push({
            weekday: getWeekday(day.datetime),
            tempmin: day.tempmin,
            tempmax: addUnit(day.tempmax, 'temp', unitGroup),
            precipprob: addUnit(day.precipprob, 'probability', unitGroup),
            preciptype: day.preciptype ? day.preciptype.join("/") : "rain",
            icon: day.icon,
        });
    }
    return nextDays;
}

function getWindDirection(degree){
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(degree / 45) % 8];
};

function addUnit(val, measure, unitGroup){
    return `${val} ${GROUPS[unitGroup][measure]}`;
}

function getWeekday(dateString){
    // in format "yyyy-mm-dd"
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return weekdays[date.getDay()];
}

export default queryVisualCrossing;
