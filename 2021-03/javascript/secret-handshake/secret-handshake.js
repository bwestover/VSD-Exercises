export const commands = (number) => {
  let handshake = []
  // it shares a bit with 1
  if ((number & 1) === 1) {
    handshake.push("wink")
  }

  // it shares a bit with 2
  if ((number & 2) === 2) {
    handshake.push("double blink")
  }

  // it shares a bit with 4
  if ((number & 4) === 4) {
    handshake.push("close your eyes")
  }

  // it shares a bit with 8
  if ((number & 8) === 8) {
    handshake.push("jump")
  }

  // it shares a bit with 16
  if ((number & 16) === 16) {
    handshake = handshake.reverse()
  }

//   return handshake
// };

// alternative solution (we reviewed this and discussed, but didn't write)

//const handshakeCommands = ['wink', 'double blink', 'close your eyes', 'jump'];
//
//export const commands = (handshake) => {
//  if (typeof handshake !== 'number') {
//    throw new Error('Handshake must be a number');
//  }
//
//  const shakeWith = handshakeCommands.filter((_, i) => (
//    handshake & (Math.pow(2, i))
//  ));
//
//  if (handshake & (Math.pow(2, 4)))
//    shakeWith.reverse();
//
//  return shakeWith;
//};
//
