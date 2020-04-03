# This is a partial solution to one of the two required functions.
# We ran over time before we could finish it up. Pull Requests Welcome :D

#VGG the decoder function was added but it can only handle up to 2 digits numbers.

def decode(string):
  output=""
  n=0
  i=0

  while i < len(string):
    
    if string[i].isdigit() :
      if string[i+1].isdigit(): #VGG there are two digit numbers ...
        n=10*int(string[i])+int(string[i+1])
        i=i+2 #ltr=string[i+2]
        #print(n,string)
      else:
        n=int(string[i])
        i=i+1 #ltr=string[i+1]
    else:
        n=1
    
    ltr=string[i]
    i+=1
    for j in range(n):
      output+=ltr

  return output

#VGG updated the version 
def encode(string):
    if len(string) < 2:
        return string

    output = ""
    prev_letter = ""
    count = 0
    for i in range(len(string)):

        if string[i] == prev_letter:
            count += 1
        else:
            if count > 1:
                output += str(count) + prev_letter
            else:
                output += prev_letter
            count = 1
        prev_letter=string[i]
        
    if count > 1:
      output += str(count) + prev_letter
    else:
      output += prev_letter

    return output
