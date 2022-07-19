// DOM elements
const btnGenerate = document.getElementById('btn-generate');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const lengthEl = document.getElementById('length');
const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');
const resetEl = document.getElementById('btn-reset');
const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!@#$%^&*_-+=';
const numbers = '0123456789';

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  symbol: getRandomSymbol,
  number: getRandomNumber
}

btnGenerate.addEventListener('click', () => {
  const length = Number(lengthEl.value);
  console.log(typeof length);
})

// Generator functions
function getRandomUpper() {
  return alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
}

function getRandomLower() {
  return alphaLower[Math.floor(Math.random() * alphaLower.length)];
}

function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}