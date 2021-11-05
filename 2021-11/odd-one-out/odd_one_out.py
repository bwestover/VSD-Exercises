import functools

# This month we actually solved this a variety of ways, all working
# but some are faster than others



## Using a dict and add/remove each one, leaving one remaining
def odd_one_out(arr):
  ints = {}
  for n in arr:
    if ints.get(n):
      del(ints[n])
    else:
      ints[n] = 1

  return list(ints.keys())[0]


# Using functools.reduce() and XOR

#array = [8, 7, 3, 4, 7, 4, 5, 3, 5, 3, 3, 7, 8]
  #return functools.reduce(lambda a, b: a ^ b, arr, 0)

#print(odd_one_out2(array))
# a XOR a = 0
# a XOR a XOR a = (a XOR a) XOR a = 0 XOR a = a
# a XOR a XOR a = a

#array = [8, 7, 3, 4, 7, 4, 5, 3, 5, 3, 3, 7, 8]
# [[(8, 8,) (7, 7), 7, (3, 3), (3, 3), (4, 4), (5, 5)]]
# The pairs of numbers cancel themselves out when XORed
# XOR is commutative and associative, so don't bother
# that they do not cancel out immediately as 8 is at the start and end, they would eventually cancel out

# If you XOR a number or character by itself an even number of times, it turns to 0
# 0 XOR x = x For XOR, 0 is an identity like 1 is for multiplication. So wi initialize the accumulator with 0
# __________________________
# ____________________________________
array = [8, 7, 3, 4, 7, 4, 5, 3, 5, 3, 3, 7, 8]
def odd_one_out2(arr):
  return functools.reduce(lambda a, b: a ^ b, arr, 0)

print(odd_one_out2(array))
# ____________________________________


# create a dictionary
# insert each integer as a key and the value is the count of
# times it occured
def which_is_the_odd(a:list):
  dict1={}
  for i,y in enumerate(a):
    dict1[y]=dict1.get(y,0)+1
  for key,value in dict1.items():
    if value%2==1:
      return(key)

# Using a set and array.count()
def which_is_the_odd_2(a:list):
  b=set(a)
  for i in b:
    if a.count(i) % 2 ==1:
      return i


 # using the array.count() function
#  b=set(arr)
#  for i in b:
#    if arr.count(i) % 2 ==1:
#      return i
