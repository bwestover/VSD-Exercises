# MinMax Subarray

Given an array of integers and subarray length, create contiguous subarrays of that length. You should produce subarrays starting at each element in the original array until you can no longer product subarrays of the stated length. For example, if given the array [1,2,3,4,5] and a length of 2 you should create [1,2], [2,3], [3,4], [4,5].

For each of the subarrays, determine the minimum value. Using the same example the minimum values would be 1, 2, 3, and 4.

Finally out of these minima, return the maximum value. In this example, this would be 4.

Another example array is [80, 365, 16, 4, 1024] with a subarray length of 3. Create subarrays:
   [80, 365, 16] - Min value: 16
   [365, 16, 4]  - Min value: 4
   [16, 4, 1024] - Min value: 4

   Of these minima: 16, 4, 4
   Max value: 16


