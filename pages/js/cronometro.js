/** Variáveis */
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const btnStart = document.querySelector("#btnStart");
const btnPause = document.querySelector("#btnPause");
const btnMark = document.querySelector("#btnMark");
const btnRestart = document.querySelector("#btnRestart");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

btnStart.addEventListener("click", startTimer());

function startTimer() {
    interval = setInterval(() => {

        if(!isPaused) {
            
            milliseconds += 10;

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMillisecons(milliseconds);
        }

    }, 10);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMillisecons(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}