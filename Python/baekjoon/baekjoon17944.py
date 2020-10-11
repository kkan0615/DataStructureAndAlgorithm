"""
CreatdAt: 10-06-2020
Title: 퐁당퐁당1
Number: 17944
Link: https://www.acmicpc.net/problem/17944
"""
from sys import stdin

inputLine = stdin.readline().split()
N = int(inputLine[0])
T = int(inputLine[1])
N2 = 2 * int(inputLine[0])
# 짝수라면
#print(int(T / (2 * N)))
if T < N2:
    print(T)
# elif int((T / (2 * N)) % 2) == 1:
#     print('hello')
#     print((2 * N) - (T % (2 * N)))
# else:
#     print('hi')
#     print((T % (2 * N)) + 1)
elif int(T / N2) % 2 == 1:
    print('hi')
    print(int(T / N2))
else:
    print('hello')
    # print(int(N2 - (T / N2) + 1))
    print(int(T / N2) + (T % N2)
