import { sumTotal, playerTotals, nextPlayer, possibleScores, rollDice } from './helpers'
import * as engine from './yacht'

describe('Helpers', () => {
  const players = {
    'player 1': {
      'ones': 12,
      'fours': 2
    },
    'player 2': {
      'ones': 4,
      'fives': 0
    },
    'player 3': {
      'ones': 5,
      'little straight': 20
    }
  }

  test('Sum Total', () => {
    expect(sumTotal([1, 2, 3, 4, 5])).toEqual(15)
  })

  xtest('Player Totals', () => {
    const result = [
      {
        name: 'player 1',
        total: 14
      },
      {
        name: 'player 2',
        total: 4
      },
      {
        name: 'player 3',
        total: 25
      }
    ]

    expect(playerTotals(players)).toEqual(result)
  })

  xtest('Next Player', () => {
    expect(nextPlayer(players, 'player 1')).toEqual('player 2')
    expect(nextPlayer(players, 'player 2')).toEqual('player 3')
    expect(nextPlayer(players, 'player 3')).toEqual('player 1')
  })

  xtest('Possible Scores', () => {
    const player = {
      twos: 1,
      threes: 1,
      fours: 1,
      fives: 1,
      sixes: 1,
      'full house': 1,
      'four of a kind': 1,
      'little straight': 1,
      'big straight': 1,
      yacht: 1
    }

    // Mock the scoring engine.
    engine.score = jest.fn(() => 1)

    const possible = possibleScores(player, [1, 2, 3, 4, 5])

    expect(engine.score).toHaveBeenCalled()
    expect(possible).toEqual({ones: 1, choice: 1})
  })

  xtest('Possible Scores should not return zero if other scores are available', () => {
    const player = {
      twos: 1
    }

    // Mock the scoring engine.
    engine.score = jest.fn()
    engine.score
      .mockReturnValueOnce(1)
      .mockReturnValue(0)

    const possible = possibleScores(player, [1, 2, 3, 4, 5])

    expect(possible).toEqual({ones: 1})
  })

  xtest('No Possible Scores Available', () => {
    const player = {
      ones: 1,
      twos: 1,
      threes: 1,
      fours: 1,
      fives: 1,
      sixes: 1,
    }

    // Mock the scoring engine to always return 0.
    engine.score = jest.fn(() => 0)

    const possible = possibleScores(player, [1, 2, 3, 4, 5])
    const scores = new Set(Object.values(possible))

    expect(scores.size).toEqual(1)
  })

  xtest('Locked dice will not roll', () => {
    // Mock random math.
    global.Math.random = jest.fn(() => 0.9999)
    
    const roll = rollDice([1, 3], [1, 2, 3, 4, 5])
    expect(roll).toEqual([6, 2, 6, 4, 6])

    const roll2 = rollDice([0, 2, 4], [5, 4, 3, 2, 1])
    expect(roll2).toEqual([5, 6, 3, 6, 1])
  })

  xtest('Dice rolls should have numbers from 1-6', () => {
    // Mock random math.
    global.Math.random = jest.fn(() => 0)
    expect(rollDice([], [5, 4, 3, 2, 1])).toEqual([1, 1, 1, 1, 1])

    global.Math.random = jest.fn(() => 0.9999)
    expect(rollDice([], [5, 4, 3, 2, 1])).toEqual([6, 6, 6, 6, 6])
  })
})