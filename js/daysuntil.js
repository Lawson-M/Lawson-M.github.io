
function updateCountdown(today, targetDate, daysTarget, secTarget){

    const currentYear = today.getFullYear();

    if (today>targetDate){
        targetDate.setFullYear(currentYear+1);
    }

    let diff = targetDate-today;
    let dUntil = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let sUntil = Math.ceil(diff/1000)


    document.getElementById(daysTarget).innerText = `${dUntil} Days`;
}

async function updateSunset(today, targetID, latitude, longitude) {

    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`);
    const data = await response.json();
    const targetDate = new Date(data.results.sunset);

    let diff = targetDate-today;
    let hUntil = Math.ceil(diff / (1000 * 60 * 60));


    document.getElementById(targetID).innerText = `${hUntil} Hours`;
}


setInterval(() => {

    const today = new Date();
    const currentYear = today.getFullYear();

    const christmas = new Date(currentYear, 11, 25);
    const newYears = new Date(currentYear + 1, 0, 1);

    updateCountdown(today, christmas, 'daysUntilChristmas', 'secondsUntilChristmas');
    updateCountdown(today, newYears, 'daysUntilNewYears', 'secondsUntilNewYears');
    updateSunset(today,'sunsetCST', 41.8781, -90);
}, 1000);


 
