const elements = {
  timerElement: document.getElementById('timer'),
  startBtn: document.getElementById('start-btn'),
  stopBtn: document.getElementById('stop-btn'),
  resetBtn: document.getElementById('reset-btn'),
};

function startTimer() {
  console.log('start');
  chrome.storage.local.set({ isRunning: true });
}

function stopTimer() {
  console.log('stop');
  chrome.storage.local.set({ isRunning: false });
}

function resetTimer() {
  console.log('reset');
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  });
}

elements.startBtn.addEventListener('click', startTimer);
elements.stopBtn.addEventListener('click', stopTimer);
elements.resetBtn.addEventListener('click', resetTimer);

export function UpdateTimer() {
  chrome.storage.local.get(['timer'], response => {
    elements.timerElement.textContent = `Timer: ${response.timer}`;
  });
}
