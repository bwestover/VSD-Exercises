# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.

def is_prime(number):

    for i in range(3,number,2):
        if number % i == 0:
            # Not prime
            #print(f"{number} is not prime!")
            return False
            break
    else:
        #print(f"{number} is prime")
        return True
sum=0
counter=0
for number in range(2,2000000):
    if (number % 2 != 0) and (number % 3 !=0) and (number % 5 != 0) and (number % 7 != 0):
        if is_prime(number):
            sum += number

    counter += 1
    if counter == 10000:
        print(number)
        counter = 0

print(sum+17)
