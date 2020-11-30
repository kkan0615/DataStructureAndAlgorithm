/**
 * @author: Youngjin Kwak, Requiem
 * @createdAt: 11.30.2020
 * @updatedAt: same
 *
 * https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
 * @Learned
 *  1. BigInt
 */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
  if(n === 1) return 1

  return BigInt(n) * BigInt(extraLongFactorials(n - 1))
}

function main() {
  const n = parseInt(readLine(), 10);

  console.log(extraLongFactorials(n).toString(10))
}
