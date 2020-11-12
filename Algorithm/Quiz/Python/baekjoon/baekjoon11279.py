"""
createdAt: 11-12-2020
updatedAt: 11-12-2020
Title: 최대힙
Number: 11279
Link: https://www.acmicpc.net/problem/11279
"""
import sys
import heapq

N = int(sys.stdin.readline())
heap = []
for i in range(N):
    num = int(sys.stdin.readline())
    if num != 0:
        heapq.heappush(heap, (-num, num))
    elif len(heap) == 0:
        print(0)
    else:
        print(heapq.heappop(heap)[1])

"""
# Other ways

import heapq
import sys
heap = []
for _ in range(int(input())):
    num = int(sys.stdin.readline())
    if num != 0:
        heapq.heappush(heap, (-num)) # Dictionary was not needed
    else:
        if not heap:
            print(0)
        else:
            print(-1 * heapq.heappop(heap))
"""
