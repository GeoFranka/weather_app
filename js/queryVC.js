const API_KEY = '9FNW4QMFS9KMZ42V6738TXB6C';

async function queryVisualCrossing(searchTerm = 'Berlin', unitGroup = 'metric'){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchTerm}?key=${API_KEY}&unitGroup=${unitGroup}`);
        const asJson = await response.json();
        return processData(asJson);
    } catch(e){
        console.error(e);
    }
};

function processData(data){
    return {
        location: data.resolvedAddress,
        conditions: data.currentConditions.conditions,
        description: data.description,
        icon: data.currentConditions.icon,
        temp: data.currentConditions.temp,
        feelslike: data.currentConditions.feelslike,
        humidity: data.currentConditions.humidity,
        precip: data.currentConditions.precip,
        precipprob: data.currentConditions.precipprob,
        snow: data.currentConditions.snow,
        winddir: getWindDirection(data.currentConditions.winddir),
        windspeed: data.currentConditions.windspeed,
        sunrise: data.currentConditions.sunrise,
        sunset: data.currentConditions.sunset,
    };
};

function getWindDirection(degree){
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(degree / 45) % 8];
};

export { queryVisualCrossing };
