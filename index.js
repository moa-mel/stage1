function updateDateTime() {
    const currentDayOfTheWeekElement = document.getElementById("currentDayOfTheWeek");
    const currentUTCTimeElement = document.getElementById("currentUTCTime");
    const currentUTCTimeMillisElement = document.getElementById("currentUTCTimeMillis");
    const now = new Date();
    const currentDayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
    const currentMillis = now.getTime();
    currentDayOfTheWeekElement.textContent = ` ${currentDayOfWeek}`;
    currentUTCTimeElement.textContent = currentTime;
    currentUTCTimeMillisElement.textContent = `${currentMillis}`;
}

// Update the current UTC time, date, and day of the week immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);