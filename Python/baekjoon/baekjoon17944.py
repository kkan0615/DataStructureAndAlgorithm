"""
CreatdAt: 10-06-2020
Title: 퐁당퐁당1
Number: 17944
Link: https://www.acmicpc.net/problem/17944
"""

N = 4
T = 7

if T % (N * 2) == T:
    print('I am here')
    print(T)
else:
    print('I am here2')
    print((N * 2) + ((N * 2) - T))