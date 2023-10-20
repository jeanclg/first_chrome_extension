const elements = {
  nameInput: document.getElementById('name-input'),
  timerInput: document.getElementById('timer-input'),
  saveBtn: document.getElementById('save-btn'),
};

function saveSettings() {
  chrome.storage.sync.set({
    name: elements.nameInput.value,
    notificationTimer: elements.timerInput.value,
  });
}

function loadSettings() {
  chrome.storage.sync.get(['name', 'notificationTimer'], data => {
    elements.nameInput.value = data.name;
    elements.timerInput.value = data.notificationTimer || '10';
  });
}

elements.saveBtn.addEventListener('click', saveSettings);

loadSettings();
