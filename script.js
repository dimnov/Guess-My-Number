const input = document.querySelector("#myInput");
const btn = document.querySelector("#myBtn");
const againBtn = document.querySelector("#again");
const betweenElement = document.querySelector('.between');
const headerElement = document.querySelector('header');
const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const highscoreElement = document.querySelector('.highscore');
const body = document.querySelector('body');

const valueMap = {
  '(Between 1 and 10)': 10,
  '(Between 1 and 20)': 20,
  '(Between 1 and 50)': 50,
  '(Between 1 and 100)': 100,
};

const colorMap = {
  10: '#D2042D', //red
  20: '#00FFFF', //blue
  50: '#FFBF00', //yellow
  100: '#5D3FD3', //purple
};

function handleInputKeydown(event) {
  if (event.code === "Enter") {
    event.preventDefault();
    btn.click();
  }
}

function handleKeyDown(event) {
  if (event.code === "Escape") {
    event.preventDefault();
    againBtn.click();
  }
}

function checkValue() {
  const value = valueMap[betweenElement.textContent];
  headerElement.style.borderBottomColor = colorMap[value];
  return value;
}

function random() {
  return Math.floor(Math.random() * checkValue()) + 1;
}

function display(message, score) {
  messageElement.textContent = message;
  scoreElement.textContent = score;
}

function changeBackground(color) {
  body.style.backgroundColor = color;
}

function changeLineColor(color) {
  headerElement.style.borderBottomColor = color;
}

function changeNumberAndWidth(width, random) {
  numberElement.style.width = width;
  numberElement.textContent = random;
}

let highscore = 0;

function handleGuess() {
  const guess = Number(guessInput.value);
  const value = checkValue();

  switch (true) {
    case guess === 0:
      display('⛔ No number!', score);
      break;
    case guess < 0 || guess > value:
      display('⚠️ Type proper number!', score);
      break;
    case guess === randomNum:
      display('🎉 Correct number!', score);
      changeBackground('#60b347');
      headerElement.style.borderBottomColor = '#EDEDED';
      changeNumberAndWidth('30rem', randomNum);

      if (score > highscore) {
        highscore = score;
        highscoreElement.textContent = score;
      }
      break;
    default:
      if (score > 1) {
        score--;
        display(guess < randomNum ? '⬆️ Up!' : '⬇️ Down!', score);
      } else {
        display('💥 You lost the game!', 0);
        changeBackground('#bb0227');
        headerElement.style.borderBottomColor = '#EDEDED';
      }
  }
}

let score = checkValue();
let randomNum = random();

input.addEventListener("keydown", handleInputKeydown);
document.addEventListener("keydown", handleKeyDown);
checkButton.addEventListener('click', handleGuess);

document.querySelector('.again').addEventListener('click', function () {
  score = checkValue();
  randomNum = random();
  changeBackground('#232931');
  display('Start guessing...', score);
  changeNumberAndWidth('15rem', '?');
  guessInput.value = '';
});

display('Start guessing...', score);
changeNumberAndWidth('15rem', '?');

document.querySelector('.versionTypeA').addEventListener('click', function () {
  betweenElement.textContent = '(Between 1 and 10)';
  score = 10;
  randomNum = random();
  changeLineColor("#D2042D")
  changeBackground('#232931');
  display('Start guessing...', score);
  changeNumberAndWidth('15rem', '?');
  guessInput.value = '';
  guessInput.mix = 1;
  guessInput.max = 10;
  highscoreElement.textContent = 0;
  highscore = 0;
});

document.querySelector('.versionTypeB').addEventListener('click', function () {
  betweenElement.textContent = '(Between 1 and 20)';
  score = 20;
  randomNum = random();
  changeLineColor("#00FFFF")
  changeBackground('#232931');
  display('Start guessing...', score);
  changeNumberAndWidth('15rem', '?');
  guessInput.value = '';
  guessInput.mix = 1;
  guessInput.max = 20;
  highscoreElement.textContent = 0;
  highscore = 0;
});

document.querySelector('.versionTypeC').addEventListener('click', function () {
  betweenElement.textContent = '(Between 1 and 50)';
  score = 50;
  randomNum = random();
  changeLineColor("#FFBF00")
  changeBackground('#232931');
  display('Start guessing...', score);
  changeNumberAndWidth('15rem', '?');
  guessInput.value = '';
  guessInput.mix = 1;
  guessInput.max = 50;
  highscoreElement.textContent = 0;
  highscore = 0;
});

document.querySelector('.versionTypeD').addEventListener('click', function () {
  betweenElement.textContent = '(Between 1 and 100)';
  score = 100;
  randomNum = random();
  changeLineColor("#5D3FD3")
  changeBackground('#232931');
  display('Start guessing...', score);
  changeNumberAndWidth('15rem', '?');
  guessInput.value = '';
  guessInput.mix = 1;
  guessInput.max = 100;
  highscoreElement.textContent = 0;
  highscore = 0;
});