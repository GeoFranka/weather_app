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

function setPrecipitation(probability, height){
    document.querySelector('.precipprob').textContent = probability;
    const probNumber = probability.split(' ')[0];
    document.querySelector('.precip').textContent = probNumber>0 ? `(${height})` : "";
}

export {
    setIcon,
    setDescription,
    setLocation,
    setTemperature,
    setPrecipitation,
};
