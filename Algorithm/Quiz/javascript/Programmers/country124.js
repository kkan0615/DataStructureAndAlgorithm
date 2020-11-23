function solution(n) {
  let answer = ''

  while(n > 0) {
    const remain = n % 3
    n = parseInt((n / 3).toString())
    if (remain === 0) {
      n -= 1
      answer = '4' + answer
    } else {
      answer = remain + answer
    }
  }
  return answer
}

console.log(solution(10))


/** 솔루션들 */

/** 솔루션 1 */
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function change124_2(n) {
  return n === 0 ? '' : change124(parseInt(((n - 1) / 3).toString())) + [1, 2, 4][(n - 1) % 3];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change124(10));

/** 솔루션 2 */
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function change124(n) {
  let answer = "";
  const array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

  while(n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}



// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change124_2(10));
