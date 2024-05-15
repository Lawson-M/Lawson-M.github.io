
function updateCountdown(today, targetDate, daysTarget, secTarget){

    const currentYear = today.getFullYear();

    if (today>targetDate){
        targetDate.setFullYear(currentYear+1);
    }

    let diff = targetDate-today;
    let dUntil = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let sUntil = Math.ceil(diff/1000)


    document.getElementById(daysTarget).innerText = `${dUntil} Days`;
    document.getElementById(secTarget).innerText = `${sUntil} Seconds`;
}


setInterval(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmas = new Date(currentYear, 11, 25);
    const newYears = new Date(currentYear + 1, 0, 1);
    const Thanksgiving = new Date(currentYear, 8, 28);
    const Juneteenth = new Date(currentYear, 5, 19);
    updateCountdown(today, christmas, 'daysUntilChristmas', 'secondsUntilChristmas');
    updateCountdown(today, newYears, 'daysUntilNewYears', 'secondsUntilNewYears');
    updateCountdown(today, Thanksgiving, 'daysUntilThanksgiving', 'secondsUntilThanksgiving');
    updateCountdown(today, Juneteenth, 'daysUntilJuneteenth', 'secondsUntilJuneteenth');
}, 1000);