function setIcon(icon){
    const iconUrl = `./icons/4thSetColor/${icon}.png`;
    const img = document.querySelector('.icon');
    img.src = iconUrl;
    img.setAttribute('alt', icon);
}

function setDescription(description){
    const span = document.querySelector('.description');
    span.textContent = description;
}

function setLocation(location){
    const input = document.querySelector('.location');
    input.value = location;
}

function setTemperature(temp, feelslike){
    document.querySelector('.temp').textContent = temp;
    document.querySelector('.feelslike').textContent = feelslike;
}

function setPrecipitation(probability, height, type){
    document.querySelector('.precipprob').textContent = probability;
    document.querySelector('.preciptype').textContent = type;
    const probNumber = probability.split(' ')[0];
    document.querySelector('.precip').textContent = probNumber>0 ? `(${height})` : "";
}

function setWind(direction, speed){
    document.querySelector('.winddir').textContent = direction;
    document.querySelector('.windspeed').textContent = speed;
}

function setAlerts(alerts){
    const alertsDiv = document.querySelector('.alerts');
    alertsDiv.textContent = "";
    alerts.forEach((alert) => {
        const div = document.createElement('div');
        div.classList.add('alert');
        const link = document.createElement('a');
        link.href = alert.link;
        link.textContent = alert.headline;
        link.setAttribute('target', '_blank');
        div.appendChild(link);
        alertsDiv.appendChild(div);
    });
}

function setNextDays(nextDays){

}

export {
    setIcon,
    setDescription,
    setLocation,
    setTemperature,
    setPrecipitation,
    setWind,
    setAlerts,
    setNextDays,
};
