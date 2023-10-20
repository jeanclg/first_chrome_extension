/* eslint-disable arrow-parens */
const elements = {
  timeElement: document.getElementById('time'),
  nameElement: document.getElementById('name'),
  timerElement: document.getElementById('timer'),
  startBtn: document.getElementById('start-btn'),
  stopBtn: document.getElementById('stop-btn'),
  resetBtn: document.getElementById('reset-btn'),
};

function updateTimerDisplay() {
  chrome.storage.local.get(['timer'], response => {
    elements.timerElement.textContent = `Timer: ${response.timer}`;
  });
}

function updateCurrentTime() {
  const currentTime = new Date().toLocaleTimeString('pt-br', {
    year: 'numeric',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  });

  elements.timeElement.textContent = currentTime;

  updateTimerDisplay();
}

function updateName() {
  chrome.storage.sync.get(['name'], data => {
    const name = data.name || '???';
    elements.nameElement.textContent = `Name: ${name}`;
  });
}

function startTimer() {
  chrome.storage.local.set({ isRunning: true });
}

function stopTimer() {
  chrome.storage.local.set({ isRunning: false });
}

function resetTimer() {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  });
}

elements.startBtn.addEventListener('click', startTimer);
elements.stopBtn.addEventListener('click', stopTimer);
elements.resetBtn.addEventListener('click', resetTimer);

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
updateName();
