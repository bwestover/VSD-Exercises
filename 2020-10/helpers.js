import { score } from './yacht'

/**
 * The "players" object used in many of these functions contains all player names
 * and their scores for each category.
 *
 * const players = {
 *   'player 1': {
 *     ones: 12,
 *     fours: 2
 *   },
 *   'player 2': {
 *     ones: 4,
 *     fives: 0
 *   },
 *   'player 3': {
 *     ones: 5,
 *     'little straight': 20
 *   }
 * }
 */

export const categories = {
  ones: 'Ones',
  twos: 'Twos',
  threes: 'Threes',
  fours: 'Fours',
  fives: 'Fives',
  sixes: 'Sixes',
  'full house': 'Full House',
  'four of a kind': 'Four-of-a-Kind',
  'little straight': 'Little Straight',
  'big straight': 'Big Straight',
  choice: 'Choice',
  yacht: 'Yacht'
}

export const categoriesArr = Object.keys(categories)

/**
 * Add up all the scores for a player.
 *
 * @param {array} scores - list of scores to add together.
 *
 * @return {number} The total score for a player.
 */
export const sumTotal = scores => {
  return scores.reduce((previous, current) => {
    return previous + current
  }, 0)
}

/**
 * Get the totals for each player.
 *
 * @param {object} players - List of players and their scores with each key as the name of the player
 *   and the value as an objects of scores.
 *
 * @return {array} Each player as an object with name and total.
 */
export const playerTotals = players => {
  // return [
  //   {
  //     name: 'player 1',
  //     total: 30
  //   },
  //   {
  //     name: 'player 2',
  //     total: 2
  //   },
  //   {
  //     name: 'player 3',
  //     total: 15
  //   }
  // ]
  const playerKeys = Object.keys(players);
  return playerKeys.map(playerName => {
    const scores = Object.values(players[playerName]);
    return {
      name: playerName,
      total: sumTotal(scores)
    }
  });
}

/**
 * Get the next player from the list of players.
 *
 * @param {object} players - the list of players with each key as the name of the player.
 * @param {string} currentPlayer - the current player.
 *
 * @return {string} The name of the next player.
 */
export const nextPlayer = (players, currentPlayer) => {
  const playerKeys = Object.keys(players);
  let turn = playerKeys.indexOf(currentPlayer)
  turn += 1
  if (turn === playerKeys.length) {
    turn = 0
  }
  return playerKeys[turn];
}

/**
 * Determine all possible scores for remaining categories.
 *
 * If there are no possible scores available then every category which a player does
 * Not currently have a score for should show a possible score of Zero.
 *
 * @param {object} player - A player's list of current scores.
 * @param {array} diceRoll - The number showing on each of the 5 dice rolled Ex: [2, 1, 3, 6, 4].
 * 
 * @return {object} A key of each category not currently scored with a value of the possible score. 
 *   Ex. { threes: 6, 'little straight': 30 }
 *   If no possible scores then all values are zero Ex. { threes: 0, 'little straight': 0 }
 */
export const possibleScores = (player, diceRoll) => {
  return {ones: 1, twos: 2}
}

/**
 * Roll the dice to get 5 numbers. But only roll dice which have not been locked.
 *
 * @param {array} lockedDice - The indexes of locked dice which cannot be changed. Ex: [1, 3, 0]
 * @param {array} oldRoll - The old roll of dice Ex: [2, 1, 3, 6, 4].
 *
 * @return {array} The new 5 dice numbers that have been rolled.
 */
export const rollDice = (lockedDice, oldRoll) => {
  console.log('sample', lockedDice.includes(1))
  let newRoll=oldRoll
  console.log(lockedDice)
  for (let dice_n = 0; dice_n < 5; dice_n++) {
    //console.log('dice_n',dice_n)
    if (!lockedDice.includes(dice_n)){
    //console.log('inside', dice_n)
    newRoll[dice_n]=Math.floor(Math.random()*6) + 1
    }
  }
  console.log(newRoll)
  return newRoll
}

