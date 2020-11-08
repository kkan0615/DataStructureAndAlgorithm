# 유클리드 호제법 (Euclidean Algorithm)

## 유클리드 호제법이란?
유클리드 알고리즘(Euclidean algorithm)은 2개의 자연수의 최대공약수를 구하는 알고리즘입니다. 
비교대상의 두 개의 자연수 a와 b에서(단 a>b) a를 b로 나눈 나머지를 r이라고 했을때 GCD(a, b) = GCD(b, r)과 같고 
"r이 0이면 그때 b가 최대공약수이다."라는 원리를  활용한 알고리즘입니다.

ex) GCD(24,16) -> GCD(16,8) -> GCD(8,0) : 최대공약수 = 8
[source] : https://coding-factory.tistory.com/599

죽, a / b => 나머지 r -> b / r until r is 0 ==> b is answer! 

## Flow
### Find the GCD of 270 and 192
1. A=270, B=192
2. A ≠0
3. B ≠0
4. Use long division to find that 270 / 192 = 1 with a remainder of 78. We can write this as: 270 = 192 * 1 +78

Find GCD(192,78), since GCD(270,192) = GCD(192,78)

### A=192, B=78
1. A ≠ 0
2. B ≠ 0
3. Use long division to find that 192 / 78 = 2 with a remainder of 36. We can write this as:
192 = 78 * 2 + 36

Find GCD(78,36), since GCD(192,78) = GCD(78,36)

... GCD의 뒷 부분이 0일때까지 반복

### A=36, B=6
1. A ≠ 0
2. B ≠ 0
3. Use long division to find that 36 / 6 = 6 with a remainder of 0. We can write this as:
36 = 6 * 6 + 0 -> A mode B가 0임으로 mod 된 값이 닶

Find GCD(6,0), since GCD(36,6) = GCD(6,0)

### A=6, B=0
1. A ≠ 0
2. B = 0, GCD(6,0) = 6  -> B가 0임으로 B가 0이 되기전의 B가 닶

## Ref
1. https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm