/** Variáveis */
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const btnStart = document.querySelector("#btnStart");
const btnPause = document.querySelector("#btnPause");
const btnMark = document.querySelector("#btnMark");
const btnReset = document.querySelector("#btnReset");

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
millisecondsEl.textContent = formatMillisecons(milliseconds);
let isPaused = false;

btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);

function startTimer() {

    if (isPaused === true) {
        isPaused = false;
    }

    interval = setInterval(() => {

        if(!isPaused) {
            
            milliseconds += 1;

            // A cada 1000ms (100 pra ficar igual o app) acrescenta 1seg
            if(milliseconds === 100) {
                seconds++;
                milliseconds = 0;
            }

            // A cada 60seg acrescenta 1min
            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            // A cada 60min acrescenta 1hr
            if(minutes === 60) {
                hours++;
                minutes = 0;
            }

            hoursEl.textContent = formatTime(hours);
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMillisecons(milliseconds);
        }

    }, 10);

    btnStart.style.display = "none";
    btnPause.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    
    btnPause.style.display = "none";
    btnStart.style.display = "block";
}

function resetTimer() {
    clearInterval(interval);

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    hoursEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);
    millisecondsEl.textContent = formatMillisecons(milliseconds);

    btnPause.style.display = "none";
    btnStart.style.display = "block";

    isPaused = true;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMillisecons(time) {
    return time < 100 ? `${time}`.padStart(2, "0") : time;
}