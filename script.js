import Countdown from "./countdown.js";

const tempoEvento = new Countdown("10 September 2021 20:00:00 GMT-0300")
const tempos = document.querySelectorAll('[data-time]')

function mostrartempo(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoEvento.total[index];
    })
}
mostrartempo();
setInterval(mostrartempo, 1000);
