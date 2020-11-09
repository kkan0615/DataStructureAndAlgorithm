"""
createdAt: 11-09-2020
updatedAt: 11-09-2020
Title: 가운데를 말해요
Number: 1655
Link: https://www.acmicpc.net/problem/1655
"""
import sys
import heapq

N = int(sys.stdin.readline())
arr = []
for i in range(N):
    newNum = int(sys.stdin.readline())
    #arr.append(newNum)
    heapq.heappush(arr, newNum)
    middle = int(len(arr) / 2)
    print('arr', arr)
    if len(arr) % 2 == 0:
        print(arr[middle - 1])
    else:
        print(arr[middle])
