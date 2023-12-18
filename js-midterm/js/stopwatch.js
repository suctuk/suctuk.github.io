document.addEventListener("submit", stopStopwatch);
let stopwatch;
let s = 0;
let m = 0;
let h = 0;
let running = false;

function stopStopwatch() {
  clearInterval(stopwatch);

  stopwatch = null;
 

  // sec = s;
  // min = m;
  // hour = h;

  // document.getElementById("stopwatch").innerHTML = hour + ":" + min + ":" + sec;
}

function startStopwatch() {
  if (!running) {
    stopwatch = setInterval(updateStopwatch, 1000);
    running = true;
  }
}

function updateStopwatch() {
  s++;

  if (s === 60) {
    s = 0;
    m++;
  }
  if (m === 60) {
    m = 0;
    h++;
  }

  console.log(s);

  document.getElementById("stopwatch").innerHTML = h + ":" + m + ":" + s;
}

document.addEventListener("DOMContentLoaded", startStopwatch);
