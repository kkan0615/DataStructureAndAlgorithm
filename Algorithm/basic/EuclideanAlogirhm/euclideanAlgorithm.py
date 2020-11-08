"""
CreatedAt: 11-08-2020
UpdatedAt: 11-08-2020
Title: 유클리드 호제법 (Euclidean algorithm)
"""


# 최대 공약수 1 (반복문)
def gcd(a, b):  # a must be bigger than b (a > b)
    while b != 0:
        temp = a % b
        (a, b) = (b, temp)
    return abs(a)  # 절대값


# 최대 공약수 2 (재귀)
def gcd2(a, b):  # a must be bigger than b (a > b)
    if a < b:  # a must be bigger than b (a > b)
        a, b = a, b
    if b == 0:  # If b is 0, b is answer
        return b
    if a % b == 0:  # If a mod b is 0, don't do one more recursive
        return b
    else:
        return gcd2(a, a % b)


# PS. 최대 공배수 구하기
# 두 수(a,b) 중 어느 한수가 다른 한수의 약수가 아니면
# 최소공배수 = 최대공배수 * a * b
def lcm(a, b):
    return a * b / gcd2(a, b)


# Testing !!!
print(gcd(24, 16))
print(gcd2(24, 16))
print(lcm(24, 16))
