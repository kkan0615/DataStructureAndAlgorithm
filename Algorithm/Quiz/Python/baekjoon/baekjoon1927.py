"""
createdAt: 11-12-2020
updatedAt: 11-12-2020
Title: 최소힙
Number: 1927
Link: https://www.acmicpc.net/problem/1927
"""
import sys
import heapq

N = int(sys.stdin.readline())
heap = []
for i in range(N):
    num = int(sys.stdin.readline())
    if num != 0:
        heapq.heappush(heap, num)
    elif len(heap) == 0:
        print(0)
    else:
        print(heapq.heappop(heap))
