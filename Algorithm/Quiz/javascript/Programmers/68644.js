/**
 * 두 개 뽑아서 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript
 */

function solution(numbers) {
  let answer = []
  const mySet = new Set()
  for (let i = 0; i < numbers.length - 1; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]
      mySet.add(sum)
    }
  }

  answer = Array.from(mySet).sort((a, b) => a - b)
  return answer;
}

console.log(solution([2,1,3,4,1]))

/**
 * 다른 사람들 정답 1
 function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
 */
