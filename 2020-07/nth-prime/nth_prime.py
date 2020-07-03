def prime(number):
    if number < 1:
        raise ValueError("Argument must be 1st or higher.")
    prime_count = 0
    num = 2
    while prime_count < number:
        if is_prime(num):
            prime_count +=1
            last_prime_num = num
        num += 1
    return last_prime_num



def is_prime(number):

    for i in range(2,int(number**0.5)+1):
        if number % i == 0:
            # Not prime
            #print(f"{number} is not prime!")
            return False
            break
    return True
