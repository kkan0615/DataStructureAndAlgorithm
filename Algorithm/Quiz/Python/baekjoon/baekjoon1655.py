"""
createdAt: 11-09-2020
updatedAt: 11-10-2020
Title: 가운데를 말해요
Number: 1655
Link: https://www.acmicpc.net/problem/1655
"""
import sys
import heapq

N = int(sys.stdin.readline())
maxLeft = []
minRight = []
for i in range(N):
    newNum = int(sys.stdin.readline())

    if len(maxLeft) == len(minRight):
        heapq.heappush(maxLeft, (-newNum, newNum))
    else:
        heapq.heappush(minRight, (newNum, newNum))

    if minRight and maxLeft[0][1] > minRight[0][1]:
        leftValue = heapq.heappop(maxLeft)[1]
        rightValue = heapq.heappop(minRight)[1]
        heapq.heappush(minRight, (leftValue, leftValue))
        heapq.heappush(maxLeft, (-rightValue, rightValue))

    print(i)
    print('newNum', newNum)
    print('max_left', maxLeft)
    print('min_right', minRight)

    print('answer:', maxLeft[0][1])
    print('---------------------------------------------------------')

