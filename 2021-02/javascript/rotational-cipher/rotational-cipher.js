export class RotationalCipher {
  static rotate(text, key) { 

    let secretMessage = ''
    for (const char of text) {
      secretMessage += this.cipher(char, key)
    }
    return secretMessage
  }

  static cipher(char, key) {
    if (('a'.charCodeAt(0) <= char.charCodeAt(0)) && (char.charCodeAt(0) <= 'z'.charCodeAt(0))) {
      console.log(char)
      const code = (char.charCodeAt(0) - 'a'.charCodeAt(0) + key) % 26 + 'a'.charCodeAt(0)
      return String.fromCharCode(code);
    }
    if (('A'.charCodeAt(0) <= char.charCodeAt(0)) && (char.charCodeAt(0) <= 'Z'.charCodeAt(0))) {
      const code = (char.charCodeAt(0) - 'A'.charCodeAt(0) + key) % 26 + 'A'.charCodeAt(0)
      return String.fromCharCode(code)
    }

    return char
  }

}

