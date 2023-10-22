/* eslint-disable import/extensions */
import { UpdateTimer } from './timer.js';

const elements = {
  timeElement: document.getElementById('time'),
};

export function UpdateCurrentTime() {
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

  UpdateTimer();
}
