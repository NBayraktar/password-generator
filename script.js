const btnGenerate = document.getElementById('btn-generate');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
const syms = '!@#$%^&*_-+=';
const nums = '0123456789';
const passLength = 10;

const passBox1 = document.getElementById('pass-1');
const passBox2 = document.getElementById('pass-2');
const passBox3 = document.getElementById('pass-3');
const passBox4 = document.getElementById('pass-4');

btnGenerate.addEventListener('click', () => {
  let characters = '';
  upperEl.checked ? (characters += alphaUpper) : '';
  lowerEl.checked ? (characters += alphaLower) : '';
  symbolsEl.checked ? (characters += syms) : '';
  numbersEl.checked ? (characters += nums) : '';

  for (let i = 0; i < passLength; i++) {
    let password = '';

    password += characters.charAt(Math.floor(Math.random() * characters.length));

  }


})

function showPass(arg) {

}