"""
CreatedAt: 10-12-2020
Title: 카드2
Number: 2164
Link: https://www.acmicpc.net/problem/1406
Refs:
    1. https://codedrive.tistory.com/201
    2. https://somjang.tistory.com/entry/BaekJoon-1406%EB%B2%88-%EC%97%90%EB%94%94%ED%84%B0-Python
Difficult points:
    1. 시간 초과, 기존에 했던 (list 와 current position) 으로는 시간초과가 발생
    2. rstrip을 사용하지 않을 경우 에러발생
    3. ::-1 로 reverse 할 수 있는지 몰랐음
"""

# L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
# D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
# B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
# 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
# P $	$라는 문자를 커서 왼쪽에 추가함

import sys

# 커서의 왼쪽 부분
leftList = list(sys.stdin.readline().rstrip())
# 커서의 오른쪽 부분
rightList = []
# 입력할 명령어의 개수를 나타내는 정수
M = int(sys.stdin.readline().rstrip())
# 명령어 반복
for i in range(M):
    # commands라는 리스트를 만들어서 for문을 돌렸으나, 다음 과 같은 방법을 ref에서 고안함.
    # 그러므로써 코드가 간결해짐
    inputLine = sys.stdin.readline().split()
    if inputLine[0] == 'L' and leftList:
        rightList.append(leftList.pop())
    elif inputLine[0] == 'D' and rightList:
        leftList.append(rightList.pop())
    elif inputLine[0] == 'B' and leftList:
        leftList.pop()
    elif inputLine[0] == 'P':
        leftList.append(inputLine[1])

print(''.join(leftList + rightList[::-1]))
