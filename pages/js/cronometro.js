/** Variáveis */
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let millisecond = document.getElementById("millisecond");

const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnMark = document.getElementById("btn-mark");
const btnRestart = document.getElementById("btn-restart");

let start = false;

/** Definindo tempo do cronômetro */

// Instânciando a classe Date
let cronometro = new Date();

// Defininfo tempo
cronometro.setHours(0, 0, 0);
cronometro.setMilliseconds(0);

// Atribuindo tempo
hour.innerText = cronometro.getHours();
minute.innerText = cronometro.getMinutes();
second.innerText = cronometro.getSeconds();
millisecond.innerText = cronometro.getMilliseconds();

console.log(`${hour}: ${minute}: ${second}: ${millisecond} \nh  m  s`);

// Botões
btnRestart.addEventListener("click", function(e) {

    console.log("*** REINICIANDO CRONÔMETRO ***");

    cronometro.setHours(0, 0, 0);
    cronometro.setMilliseconds(0);

    hour.innerText = cronometro.getHours();
    minute.innerText = cronometro.getMinutes();
    second.innerText = cronometro.getSeconds();
    millisecond.innerText = cronometro.getMilliseconds();

    console.log(`${hour.innerText}: ${minute.innerText}: ${second.innerText}: ${millisecond.innerText} \nh  m  s`);

});

btnStart.addEventListener("click", function (e) {

    setInterval(function() { 
        cronometro.setSeconds((parseInt(second.innerText)) + 1);
        second.innerText = cronometro.getSeconds();
        console.log(`${hour}: ${minute}: ${second}: ${millisecond} \nh  m  s`)
    }, 1000);

    if(start) 
    {
        start = false;
    }
    else
    {
        start = true;    
    }

});