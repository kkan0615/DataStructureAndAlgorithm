/**
 * link: https://programmers.co.kr/learn/courses/30/lessons/72410
 */

function solution(new_id) {
  let answer = new_id
  /* 1. new_id의 모든 대문자를 대응되는 소문자로 치환합니다. */
  answer = answer.toLowerCase()
  /* 2. new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다. */
  const pattern = /[\w-.]/g
  answer = answer.match(pattern).toString()
  answer = answer.replace(/,/g, '')
  while (answer.includes('..'))
    answer = answer.replace('..', '.')

  if (answer[0] === '.')
    answer = answer.substring(1)
  // console.log(new_id, ':' , answer)
  if (answer.length && answer[answer.length - 1] === '.') {
    answer = answer.substring(0, answer.length - 1)
  }

  if (answer.length && answer.length > 15) {
    answer = answer.substr(0, 15)

    if (answer.length && answer[answer.length - 1] === '.') {
      answer = answer.substring(0, answer.length - 1)
    }
  }

  if (answer.length < 3) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1] || 'a'
    }
  }

  return answer
}
// console.log(new_id, ':' , answer)

// console.log(solution('...!@BaT#*..y.abcdefghijklm'))
// console.log(solution('z-+.^.'))
// console.log(solution('abcdefghijklmn.p'))
console.log(solution('=.='))
