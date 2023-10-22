/* eslint-disable import/extensions */
import { UpdateCurrentTime } from './timeDisplay.js';
import { UpdateName } from './name.js';

UpdateCurrentTime();
UpdateName();
setInterval(UpdateCurrentTime, 1000);
