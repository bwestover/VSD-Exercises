#     1 = 1 = 2^0  = "wink"
#    10 = 2 = 2^1  = "double blink"
#   100 = 4 = 2^2  = "close your eyes"
#  1000 = 8 = 2^3 = "jump"
# 10000 = 16 = 2^4 - reverse operations

def commands(number):
  handshake = []
  if number & 1 == 1: # it shares a bit with 1
    handshake.append("wink")
  if number & 2 == 2: # it shares a bit with 2
    handshake.append("double blink")
  if number & 4 == 4: # it shares a bit with 4
    handshake.append("close your eyes")
  if number & 8 == 8: # it shares a bit with 8
    handshake.append("jump")

  if number & 16 == 16: # it shares a bit with 16
    #handshake = handshake[::-1]

    #  list(reversed(handshake))
    handshake.reverse()

  return handshake
  #return handshake if number & 16 != 16 else handshake[::-1]
