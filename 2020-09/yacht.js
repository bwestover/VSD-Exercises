// Match a category name to a function name.
const categoryMap = {
  'yacht': rollYacht,
  'ones': rollDigit,
  'twos': rollDigit,
  'threes': rollDigit,
  'fours': rollDigit,
  'fives': rollDigit,
  'sixes': rollDigit,
  'full house': rollFullHouse,
  'four of a kind': rollFourKind,
  'little straight': rollLittleStraight,
  'big straight': rollBigStraight,
  'choice': rollChoice
}

export const score = (dice, category) => {
  const roller = categoryMap[category]
  return roller(dice, category)
  //Ex.  return rollYacht(dice)
  //Ex2. return rollDigit(dice)
};


function rollYacht(dice) {
  const diceSet = new Set(dice);

  if (diceSet.size == 1) {
    return 50 
  } else {
    return 0
  }
}

function rollDigit(dice, category) {
  const numerals = {
    'ones':   1,
    'twos':   2,
    'threes': 3,
    'fours':  4,
    'fives':  5,
    'sixes':  6
  }

  const winners = dice.filter(roll => roll === numerals[category])
  return sum(winners)
}

function rollFourKind() {}

function rollLittleStraight() {}

function rollBigStraight() {}

function rollFullHouse() {}

function rollChoice(dice) {
  return sum(dice)
}

function sum(scores) {
  return scores.reduce((previous, current) => {
    return previous + current
  }, 0)
}
