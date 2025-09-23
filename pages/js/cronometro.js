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

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

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
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}