import random

def generate_odd_one_out_array(n, seed=None):
    """ Generate an array of n sets of integers that occur an even number of
    times and a single integer that occurs an odd number of times"""

    arr = []
    for i in range(n):
        # Optionally Make data NOT random for use in static tests
        if seed:
            random.seed(seed + i)
        arr += [i] * random.randrange(2, 20, 2)
    random.shuffle(arr)
    del(arr[random.randint(0, len(arr)-1)])

    return arr
