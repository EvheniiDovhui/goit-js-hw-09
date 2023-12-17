const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
startBtn.addEventListener('click', startEpilepcy);
stopBtn.addEventListener('click', stopEpilepcy);
stopBtn.setAttribute('disabled', 'true');

body.insertAdjacentHTML(
  'beforeEnd',
  `<h2 class="text"> Код кольору в системі Hex:  <span ></span></h2>`
);
const text = document.querySelector('.text');
text.style.textAlign = 'left';
text.style.marginLeft = '39%';
body.style.display = 'flex';
body.style.flexDirection = 'column';

let temp;

function startEpilepcy() {
  let currentColor;
  const idInt = setInterval(() => {
    currentColor = getRandomHexColor();
    body.style.backgroundColor = currentColor;
    body.lastElementChild.lastChild.textContent = ` ${currentColor}`;
  }, 1000);
  temp = idInt;
  currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  text.lastChild.textContent = ` ${currentColor}`;
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}

function stopEpilepcy() {
  clearInterval(temp);
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
