const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;
let isIntervalRun = false;

stopBtnRef.classList.add('disabled');

startBtnRef.addEventListener('click', clickOnStartBtnHandler);
stopBtnRef.addEventListener('click', clickOnStopBtnHandler);

function clickOnStartBtnHandler(e) {
  e.preventDefault();

  disableStartBtn();
  changeBodyColor();
}

function clickOnStopBtnHandler(e) {
  e.preventDefault();

  disableStopBtn();

  console.log('🚗✔ setInterval is stopped');

  clearInterval(timerId);

  isIntervalRun = false;
}

function changeBodyColor() {
  if (!isIntervalRun) {
    console.log('🚗❌ setInterval is running');

    isIntervalRun = true;

    timerId = setInterval(() => {
      bodyRef.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

  return;
}

function disableStartBtn() {
  if (!startBtnRef.classList.contains('disabled')) {
    console.log('~ btn START is disabled ~');

    startBtnRef.classList.add('disabled');
    stopBtnRef.classList.remove('disabled');

    return;
  }
}
function disableStopBtn() {
  if (!stopBtnRef.classList.contains('disabled')) {
    console.log('+ btn STOP is disabled +');

    stopBtnRef.classList.add('disabled');
    startBtnRef.classList.remove('disabled');

    return;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
