import time

def isVeryOdd(n):
    for i in str(n):
        if (int(i) % 2 == 0):
            return False
    return True

def getTotal(n):
    total = 0
    for i in range(0, n, 2):
        if (i % 10 == 0):
            continue

        reversed = str(i)[::-1]
        intReversed = int(reversed)

        if intReversed % 2 == 1:
            result = (i + intReversed)

            if isVeryOdd(result):
                total += 1

    return total * 2

start = time.time()
total = getTotal(10000000)
end = time.time()

print(total)
print(end - start)
