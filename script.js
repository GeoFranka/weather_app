async function queryVisualCrossing(searchTerm = 'Berlin', unitGroup = 'metric'){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchTerm}?key=9FNW4QMFS9KMZ42V6738TXB6C&unitGroup=${unitGroup}`);
        const asJson = await response.json();
        console.log(asJson);
    } catch(e){
        console.error(e);
    }
};

queryVisualCrossing();
