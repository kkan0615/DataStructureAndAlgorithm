/**
 * https://programmers.co.kr/learn/courses/30/lessons/42583
 */

function addAllWeights(arr) {
  return Object.values(arr).reduce((t, { weight }) => t + weight, 0)
}

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let processingBridge = []
  let passedBridge = []
  const startedLength = truck_weights.length
  while (passedBridge.length < startedLength) {
    if (processingBridge.length > 0 && processingBridge[0].counts + 1 >= bridge_length) {
      passedBridge.push(processingBridge.shift().weight)
    }
    // console.log('passedBridge', processingBridge)
    processingBridge.map(truck => {
      truck.counts += 1
      return truck
    })

    // console.log(addAllWeights(processingBridge) + truck_weights[0])
    if (truck_weights.length > 0 && (addAllWeights(processingBridge) + truck_weights[0]) <= weight) {
      processingBridge.push({ weight: truck_weights.shift(), counts: 0 })
    }

    answer++
  }
  return answer;
}


console.log(solution(2, 10, [7,4,5,6]))
console.log(solution(100, 100, [10]))
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))


/* another solutions */
// function solution(bridge_length, weight, truck_weights) {
//   var answer = 0;
//   let total_truck_weight = 0;
//   let bridge_queue = [], weight_queue = [];
//
//   //while(truck_weights.length > 0) {
//   do {
//     // 다리를 건너는 트럭 이동
//     for(let i in bridge_queue) {
//       bridge_queue[i]--;
//     }
//     if(bridge_queue[0] == 0) {
//       total_truck_weight -= weight_queue.shift();
//       bridge_queue.shift();
//     }
//
//     // 다리가 견딜 수 있으면 트럭 1개 올리기
//     if(total_truck_weight + truck_weights[0] <= weight) {
//       weight_queue.push(truck_weights[0]);
//       bridge_queue.push(bridge_length);
//       total_truck_weight += truck_weights.shift();
//     }
//     answer++;
//   } while(bridge_queue.length > 0)
//
//   return answer;
// }
