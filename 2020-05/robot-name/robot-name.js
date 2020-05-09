// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  // A list of all robot names used.
  static nameHistory = {}

  // A private robot name.
  #name = ''

  constructor() {
    this.#name = this.newUniqueName()
  }

  /**
   * A getter to return the "name" of the current robot.
   *
   * @return {string|*}
   */
  get name() {
    return this.#name
  }

  /**
   * Create the random name for the robot in the format of two uppercase letters
   * followed by three digits, such as RX837 or BC811.
   *
   * @return {string}
   */
  randomName() {
    let name = ''

    // Generate the first two alpha-numeric characters.
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 2; i++) {
      name += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    // Generate the remaining three random numbers.
    for (let i = 0; i < 3; i++) {
      name += Math.floor(Math.random() * 10).toString()
    }

    return name
  }

  /**
   * Generate a new Unique name for a robot.
   *
   * @return {string}
   */
  newUniqueName() {
    let name = ''
    do {
      name = this.randomName()
    } while (this.notUnique(name))

    this.addToHistory(name)
    return name
  }

  /**
   * Check if a name is not unique.
   *
   * @param name
   * @return {boolean|*}
   */
  notUnique(name) {
    const { alpha, numeric } = this.splitName(name)

    if (Robot.nameHistory[alpha] !== undefined) {
      return Robot.nameHistory[alpha].includes(numeric)
    } else {
      return false
    }
  }

  /**
   * Add the name into the list of used names.
   *
   * @param name
   */
  addToHistory(name) {
    const { alpha, numeric } = this.splitName(name)

    if (Robot.nameHistory[alpha] !== undefined) {
      Robot.nameHistory[alpha].push(numeric)
    } else {
      Robot.nameHistory[alpha] = [numeric]
    }
  }

  /**
   * Split the name into the alpha and numeric parts.
   *
   * @param name
   * @return {{alpha: *, numeric: *}}
   */
  splitName(name) {
    const alpha = name.substring(0, 2)
    const numeric = name.substring(2)
    return {
      alpha,
      numeric,
    }
  }

  /**
   * Replace the current name with a new unique one.
   */
  reset() {
    this.#name = this.newUniqueName()
  }

  /**
   * Clear out all of the names used.
   */
  static releaseNames() {
    Robot.nameHistory = {}
  }

}
