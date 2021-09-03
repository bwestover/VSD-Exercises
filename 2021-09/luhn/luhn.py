class Luhn:
    def __init__(self, card_num):
        self.card_num = card_num.replace(" ", "")

    def valid(self):
      if len(self.card_num) <= 1:
        return False

      if not self.card_num.isdigit():
        return False

      second_from_right = self.card_num[-2::-2]
      first_from_right = self.card_num[::-2]

      total_sum = self.double_each_item(second_from_right)
      total_sum += sum(int(d) for d in first_from_right)

      return total_sum % 10 == 0

    def doubled(self, digit_string):
      doubled = int(digit_string) * 2
      if doubled > 9:
        return doubled - 9
      else:
        return doubled

    def double_each_item(self, num_string):
      return sum(self.doubled(d) for d in num_string)

