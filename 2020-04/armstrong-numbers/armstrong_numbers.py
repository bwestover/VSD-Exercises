def is_armstrong_number(number):
    length = len(str(number))
    return sum(int(digit)**length for digit in str(number)) == number


#Alternate solution with no string conversion using numpy

# from numpy import log10 as log10
#
# def is_armstrong_number(x):
#     if x == 0: # zero is an armstrong number, also log10(0) would raise a divide by zero error
#         return True
#     z=x
#     n=int(log10(x))+1
#     sum=0
#     while z != 0:
#         y=z/10
#         iz=int(y)
#         sum+=(z-iz*10)**n
#         z=iz
#     return sum == x
