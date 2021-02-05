def rotate(text, key):

  return "".join([cipher(char,key) for char in text])

  # Alternative using a temp variable and a for loop

  #secret_message = ""

  #for char in text:
  #  secret_message += cipher(char,key)

  #return secret_message 

def cipher(char,key):
    # if it's in ascii range 65 - 90 (uppercase) or 97 - 122 (lowercase) then its a letter
    if ord('A')<=ord(char)<=ord('Z'):
      return chr((ord(char)-ord('A')+key)%26+ord('A'))
    if ord('a')<=ord(char)<=ord('z'):
      return chr((ord(char)-ord('a')+key)%26+ord('a'))
    return char


