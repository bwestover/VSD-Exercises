def min_max_subarray(array, subarray_length):
    # split subarrays - DONE
    # find min of each subarray - DONE
    # return max of all the minima

    # [1,2,3,4,5] - subarray_length = 3

# Our original attempt. This passes the tests, but will timeout given a
# large array with a large subarray length

#    minimums = []
#    array_length = len(array)
#    for i in range(array_length):
#        if i+subarray_length <= array_length:
#            minimums.append(min(array[i:i+subarray_length]))

#    return max(minimums)

# This was an attempt at optimizing away the exponential complexity
# The idea is that we're not creating the subarrays object and 
# processing "as we go". Unfortunately this still times out.
    max_min = -999999999
    array_length = len(array)
    for i in range(array_length):
      if i+subarray_length <= array_length:
        min_val = min(array[i:i+subarray_length])
        #print(array[i:i+subarray_length])
        #print(min_val)
        if min_val > max_min:
          #print("I'm running")
          max_min = min_val

    return max_min

if __name__ == "__main__":
    print(min_max_subarray([1,2,3,4,5], 3))

    #[1,150,2,3,4,5, 1, 85, 22, 15]  sub_len = 3

    #max_min = 15
    pass
