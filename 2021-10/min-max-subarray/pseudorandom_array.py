import random


def generate_pseudorandom_array(length):
    random_seed = 0
    test_arr = []
    for i in range(length):
        random_seed += 1
        random.seed(random_seed)
        test_arr.append(random.randint(0, 1000000))
    return test_arr
