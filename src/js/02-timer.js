import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputField = document.querySelector('#datetime-picker');
let startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onClick);
const daysRemain = document.querySelector('[data-days]');
const hoursRemain = document.querySelector('[data-hours]');
const minutesRemain = document.querySelector('[data-minutes]');
const secondsRemain = document.querySelector('[data-seconds]');
startBtn.disabled = true;

function onClick() {
  const checkedDate = JSON.parse(localStorage.getItem('checkedDate'));
  Notiflix.Notify.success('The countdown has started successfully');
  startCountdown(checkedDate);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const checkedDate = checkDate(selectedDates[0]);
    localStorage.setItem('checkedDate', JSON.stringify(checkedDate.getTime()));
  },
};

flatpickr('#datetime-picker', options);

function checkDate(selectedDates) {
  const date = new Date().getTime();
  selectedDates.getTime() > date
    ? (startBtn.disabled = false)
    : ((startBtn.disabled = true),
      Notiflix.Notify.warning('Please choose a date in the future'));
  return selectedDates;
}

function startCountdown(checkedDate) {
  createLayout(checkedDate);
  setInterval(() => {
    createLayout(checkedDate);
  }, 1000);
}

function createLayout(checkedDate) {
  startBtn.disabled = true;
  let curDate = new Date();
  curDate = curDate.getTime();
  const result = checkedDate - curDate;
  if (result >= 0) {
    const remainTime = convertMs(result);
    daysRemain.textContent = `${remainTime.days.toString().padStart(2, '0')}`;
    hoursRemain.textContent = `${remainTime.hours.toString().padStart(2, '0')}`;
    minutesRemain.textContent = `${remainTime.minutes
      .toString()
      .padStart(2, '0')}`;
    secondsRemain.textContent = `${remainTime.seconds
      .toString()
      .padStart(2, '0')}`;
  } else {
    return;
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
