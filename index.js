
document.addEventListener('DOMContentLoaded', function() {


    const currentDate = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const currentTime = Date.now();

    // Display the day of the week and time
    document.getElementById('weekday').textContent = ` ${dayOfWeek}`;
    document.getElementById('time').textContent = `${currentTime}`;
});
