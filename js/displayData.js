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
    const daysDiv = document.querySelector('.days');
    daysDiv.textContent = "";
    nextDays.forEach((d)=>{
        const day = document.createElement('div');
        day.classList.add('day');
        const firstDiv = document.createElement('div');
        const weekday = document.createElement('div');
        weekday.classList.add('weekday');
        weekday.textContent = d.weekday;
        firstDiv.appendChild(weekday);
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.src = `./icons/4thSetColor/${d.icon}.png`;
        icon.setAttribute('alt', d.icon);
        firstDiv.appendChild(icon);
        day.appendChild(firstDiv);
        const secondDiv = document.createElement('div');
        const tempDiv = document.createElement('div');
        tempDiv.textContent = `${d.tempmin} - ${d.tempmax}`;
        secondDiv.appendChild(tempDiv);
        const precipDiv = document.createElement('div');
        precipDiv.textContent = `${d.precipprob} ${d.preciptype}`;
        secondDiv.appendChild(precipDiv);
        day.appendChild(secondDiv);
        daysDiv.appendChild(day);
    });

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
