
function updateCountdown(today, targetDate, daysTarget){

    const currentYear = today.getFullYear();

    if (today>targetDate){
        targetDate.setFullYear(currentYear+1);
    }

    let diff = targetDate-today;
    let dUntil = Math.ceil(diff / (1000 * 60 * 60 * 24));


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

function Calculate(){
    cDay = document.forms["custom-form"]["day"].value;
    cMonth = document.forms["custom-form"]["month"].value;
    cYear = document.forms["custom-form"]["year"].value;
    const target = new Date(cYear, cMonth, cDay);

    if(target!==NaN && cDay!=="" && cYear!=="" && cMonth!=="" ){
        target.setMonth(target.getMonth()-1);
        const today = new Date();
        let diff = target-today;
        let dUntil = Math.ceil(diff / (1000 * 60 * 60 * 24));
        console.log(dUntil);
        if(dUntil>0){
            document.getElementById("answer").innerText = `${dUntil} Days Away!`;
        }else{
            document.getElementById("answer").innerText = `${dUntil*-1} Days Ago!`;
        }
    }else{
        document.getElementById("answer").innerText = `There is an issue with your inputs`;
    }
    
}

const today = new Date();
    const currentYear = today.getFullYear();

    const halloween = new Date(currentYear, 9, 31);
    const christmas = new Date(currentYear, 11, 25);
    const newYears = new Date(currentYear + 1, 0, 1);

    updateCountdown(today, halloween, 'daysUntilHalloween');
    updateCountdown(today, christmas, 'daysUntilChristmas');
    updateCountdown(today, newYears, 'daysUntilNewYears');
    /*updateSunset(today,'sunsetCST', 41.8781, -90);*/

setInterval(() => {

    const today = new Date();
    const currentYear = today.getFullYear();

    const halloween = new Date(currentYear, 9, 31);
    const christmas = new Date(currentYear, 11, 25);
    const newYears = new Date(currentYear + 1, 0, 1);

    updateCountdown(today, halloween, 'daysUntilHalloween');
    updateCountdown(today, christmas, 'daysUntilChristmas');
    updateCountdown(today, newYears, 'daysUntilNewYears');
    /*updateSunset(today,'sunsetCST', 41.8781, -90);*/
}, 10000);


document.getElementById("btn").addEventListener("click", Calculate)
