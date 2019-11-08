import random, math

class Character:
    def __init__(self):
        self.strength = self.ability()
        self.dexterity = self.ability()
        self.constitution = self.ability()
        self.intelligence = self.ability()
        self.wisdom = self.ability()
        self.charisma = self.ability()
        self.hitpoints = 10 + modifier(self.constitution)

    def ability(self):
        dice_list = [random.randint(1,6) for dice in range(1,5)]
        return sum(sorted(dice_list)[1:4])

def modifier(score):
    return math.floor((score-10)/2)
