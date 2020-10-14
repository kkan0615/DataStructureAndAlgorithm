"""
CreatedAt: 10-12-2020
Title: 카드2
Number: 2164
Link: https://www.acmicpc.net/problem/1406
Refs:
Difficult points:
"""

# L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
# D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
# B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
# 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
# P $	$라는 문자를 커서 왼쪽에 추가함

import sys

N = sys.stdin.readline()
M = int(sys.stdin.readline())
commands = []
for i in range(M):
    inputLine = sys.stdin.readline().split()
    commands.append(inputLine)

currentPosition = len(N)
splitList = list(N)

for i in range(M):
    if commands[i][0] == 'L':
        if currentPosition - 1 >= 0:
            currentPosition -= 1
    elif commands[i][0] == 'D':
        if currentPosition + 1 < len(splitList):
            currentPosition += 1
    elif commands[i][0] == 'B':
        print(len(splitList))
        print(currentPosition)
        if currentPosition - 1 >= 0:
            splitList.pop(currentPosition - 1)
            currentPosition -= 1
    elif commands[i][0] == 'P':
        splitList.insert(currentPosition - 1, commands[i][1])

print(''.join(splitList))

# 수정해 !!