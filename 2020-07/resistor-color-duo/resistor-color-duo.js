const colToNum = {
  "black":0,
  "brown":1,
  "red":2,
  "orange":3,
  "yellow":4,
  "green":5,
  "blue":6,
  "violet":7,
  "grey":8,
  "white":9
}

export const decodedValue = (colors) => {
  const firstDigit = colToNum[colors[0]]
  const secondDigit = colToNum[colors[1]]

  return firstDigit * 10 + secondDigit
};
