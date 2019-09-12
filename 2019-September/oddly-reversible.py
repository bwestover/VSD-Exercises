import time

def isVeryOdd(n):
    while n > 9:
        n = n // 10
        if n % 2 == 0:
            return False

    return True

def getTotal(n):
    total = 0

    for i in range(0, n, 2):
        if (i % 10 == 0):
            continue
        
        numString = str(i)

        if numString[0] in ['1', '3', '5', '7', '9']:
            reversed = numString[::-1]
            intReversed = int(reversed)

            result = (i + intReversed)

            if isVeryOdd(result):
                total += 1

    return total * 2

start = time.time()
total = getTotal(10000000)
end = time.time()

print(total)
print(end - start)
