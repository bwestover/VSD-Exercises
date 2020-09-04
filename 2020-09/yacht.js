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

function rollFourKind(dice) {
  const ourBag = ourFantasticBagOfHolding(dice)
  for (const [key, value] of Object.entries(ourBag)) {
    if (value >= 4) {
      return key * 4
    }
  }

  return 0
}

function ourFantasticBagOfHolding(dice) {
  const bag = {}

  dice.forEach(roll => {
    if (bag[roll]) {
      bag[roll] += 1
    } else {
      bag[roll] = 1
    }
  })
  
  return bag
}

function rollLittleStraight(dice) {
  const sorted = dice.sort().join()
  if (sorted === '1,2,3,4,5') {
    return 30
  }
  return 0
}

function rollBigStraight(dice) {
  const sorted = dice.sort().join()
  if (sorted === '2,3,4,5,6') {
    return 30
  }
  return 0
}

function rollFullHouse(dice) {
  const bag = ourFantasticBagOfHolding(dice)
  const counts = Object.values(bag)

  if (counts.includes(3) && counts.includes(2)) {
    return sum(dice)
  }

  return 0
}

function rollChoice(dice) {
  return sum(dice)
}

function sum(scores) {
  return scores.reduce((previous, current) => {
    return previous + current
  }, 0)
}
