/**
 * Title: The tme in words
 * Link: https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=false
 * @author: Youngjin Kwak, Requiem
 * @createdAt: 12.09.2020
 * @updatedAt: 12.09.2020
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const hours = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve'
]

const minutes = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'quater',
  'sixteen',
  'seventeen',
  'eightteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
]

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the timeInWords function below.
function timeInWords(h, m) {
  let result = ''
  console.log(m)
  if(m === 30) {
    result += `half past ${hours[parseInt(h) - 1]}`
  } else if(m === 0) {
    result += `${hours[parseInt(h) - 1]} o' clock`
  } else if(m === 1) {
    result += `one minute past ${hours[parseInt(h) - 1]}`
  } else if(m === 15) {
    result += `quarter past ${hours[parseInt(h) - 1]}`
  } else if(m === 45) {
    result += `quarter to ${hours[parseInt(h)]}`
  } else if(m < 30) {
    result += `${minutes[m - 1]} minutes past ${hours[parseInt(h) - 1]}`
  } else if(m > 30) {
    result += `${minutes[60 - m - 1]} minutes to ${hours[parseInt(h)]}`
  }
  console.log(result)
  return result
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = parseInt(readLine(), 10);

  const m = parseInt(readLine(), 10);

  let result = timeInWords(h, m);

  ws.write(result + "\n");

  ws.end();
}
