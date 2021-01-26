/**
 * @author: Youngjin Kwak, Requiem
 * @createdAt: 01.26.2021
 * @updatedAt: same
 *
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 * @Learned
 *  1. Get max value in array
 */
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  const max = Math.max.apply(Math, candles); /* Max 값 얻는 방법 */
  const length = candles.filter(candle => candle === max).length
  return length

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const candlesCount = parseInt(readLine().trim(), 10);

  const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

  const result = birthdayCakeCandles(candles);

  ws.write(result + '\n');

  ws.end();
}
