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
    const span = document.querySelector('.location');
    span.textContent = location;
}

export {
    setIcon,
    setDescription,
    setLocation,
};
