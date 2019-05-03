# A googol (10100) is a massive number: one followed by one-hundred zeros;
#100100 is almost unimaginably large: one followed by two-hundred zeros.
#Despite their size, the sum of the digits in each number is only 1.

# Considering natural numbers of the form, ab, where a, b < 100, what is
#the maximum digital sum?

#1**1 - 99**99

#print(99**99)
max=0

def sum_digits(n):
    our_cool_sum = 0
    for a in str(n):
        our_cool_sum += int(a)
    return our_cool_sum

for number in range(1,100):
    for power in range(1,100):
        candidate = sum_digits(number**power)
        if candidate > max:
            max = candidate
            number_power=str(number) + " " + str(power)
            big_freaking_number = number**power
print("Max digit sum: %s which is %s, which is %s" % (max,number_power,big_freaking_number))
