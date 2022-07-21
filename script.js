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

// Reset result 
resetEl.addEventListener('click', () => {
  resultEl.textContent = '• • • •';
})

// Generate event listener
btnGenerate.addEventListener('click', () => {
  const length = Number(lengthEl.value);
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasSymbol = symbolsEl.checked;
  const hasNumber = numbersEl.checked;
  resultEl.innerText = generatePassword(length, hasUpper, hasLower, hasSymbol, hasNumber);
})

// Copy password to clipboard
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    return '';
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
})

// Generate password function
function generatePassword(length, upper, lower, symbol, number) {
  // 1. Init pass variable;
  // 2. Filter out unchecked types;
  // 3. Loop over length call generator function for each type;
  // 4. Add final pass to the pass variable and return;
  let generatedPassword = '';
  const typesCount = upper + lower + symbol + number;
  const typesArr = [{
    upper
  }, {
    lower
  }, {
    symbol
  }, {
    number
  }].filter(item => Object.values(item)[0]);
  // console.log('typesCount: ', typesCount);
  // console.log('typesArr: ', typesArr);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log(funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}


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