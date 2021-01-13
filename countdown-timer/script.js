const endDate = new Date('1 Jan');
endDate.setFullYear(new Date().getFullYear()+1);

const hoursEl = document.getElementById("days");
const daysEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
    const currentDate = new Date();

    const totalSeconds = (endDate-currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600) %24;
    const minutes = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) %60;

    hoursEl.innerHTML = days;
    daysEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

function perSec(object) {
    object();
    setInterval(object,1000);
}

perSec(countdown);
