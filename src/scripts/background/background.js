chrome.alarms.create({
  periodInMinutes: 1 / 60, // 1 second
});

function showNotification() {
  this.registration.showNotification('Timer Extension', {
    body: 'Teste Notificação',
    icon: '../../../images/icon.png ',
  });
}

function handleAlarm() {
  chrome.storage.local.get(['timer', 'isRunning'], response => {
    const { isRunning, timer: time } = response;

    if (!isRunning) return;

    chrome.storage.local.set({
      timer: time + 1,
    });

    chrome.action.setBadgeText({
      text: `${time}`,
    });

    chrome.storage.sync.get(['notificationTimer'], data => {
      if (time % data.notificationTimer === 0) {
        showNotification();
      }
    });
  });
}

chrome.alarms.onAlarm.addListener(handleAlarm);
