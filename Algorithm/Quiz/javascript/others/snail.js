let x = 0
let y = 0
let flag = 0
const n = 5
const n2 = n * n
let arr = []

for (let i = 0; i < n; i++) {
  arr[i] = []
}

for (let i = 0; i < n2; i++) {
  arr[y][x] = i + 1
  switch (flag % 4) {
    case 0:
      if (x + 1 >= n || arr[y][x + 1]) {
        flag++
        y++
      }
      else x++
      break
    case 1:
      if (y + 1 >= n || arr[y + 1][x]) {
        flag++
        x--
      }
      else y++
      break
    case 2:
      if (x - 1 < 0 || arr[y][x - 1]) {
        flag++
        y--
      }
      else x--
      break
    case 3:
      if (y - 1 < 0 || arr[y - 1][x]) {
        flag++
        x++
      }
      else y--
      break
  }
}

console.log(arr)
