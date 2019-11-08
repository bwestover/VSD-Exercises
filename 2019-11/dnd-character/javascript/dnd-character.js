//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = () => {
  throw new Error("Remove this statement and implement this function");
};

export class Character {
  strength = rollAbility();

  static rollAbility() {
    let array = [];

    for (let i = 0; i < 4; i++) {
      array.push(Math.floor(Math.random() * 6));
    }

    array.sort((a, b) => a - b);
    array.shift();

    const val = array.reduce((a, b) => a + b);

    if (val > 18) {
      throw new Error('Ability scores can be at most 18')
    } else {
      return val;
    }
  }

  get strength() {
    return this.strength;
  }

  get dexterity() {
    return Character.rollAbility();
  }

  get constitution() {
    return Character.rollAbility();
  }

  get intelligence() {
    return Character.rollAbility();
  }

  get wisdom() {
    return Character.rollAbility();
  }

  get charisma() {
    return Character.rollAbility();
  }

  get hitpoints() {
    throw new Error("Remove this statement and implement this function");
  }
}
