let timer;
let elapsedTime = 0;
let running = false;

function formatTime(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      elapsedTime++;
      updateDisplay();
    }, 1000);
  }
}

function stopStopwatch() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateDisplay();
}

document.getElementById('startButton').addEventListener('click', startStopwatch);
document.getElementById('stopButton').addEventListener('click', stopStopwatch);
document.getElementById('resetButton').addEventListener('click', resetStopwatch);