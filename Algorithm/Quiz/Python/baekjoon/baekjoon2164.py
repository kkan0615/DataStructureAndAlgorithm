"""
CreatedAt: 10-12-2020
Title: 카드2
Number: 2164
Link: https://www.acmicpc.net/problem/2164
Refs:
    1. https://excelsior-cjh.tistory.com/96 - deque 사용법
    2. https://wiki.python.org/moin/TimeComplexity - 리스트 시간 복잡도
Difficult points: 
    1. 시간 초과가 자꾸 나왔다... 리스트를 스택 처럼 쓰려고 해서 그런거같다
"""

from sys import stdin
from collections import deque

inputLine = stdin.readline()
N = int(inputLine)

cards = deque()

for i in range(N):
    cards.append(i + 1)

while len(cards) > 1:
    # 첫번째 element 제거
    cards.popleft()
    # 첫번째 element 제거와 동시에 배열의 마지막에 추가
    cards.append(cards.popleft())

print(cards[0])
