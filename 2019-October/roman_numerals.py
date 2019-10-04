# Given a normal number return the roman numeral for that number

def roman(number):

    roman_numerals = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
        }

    roman_numeral = ""
    for arabic in roman_numerals.keys():
        while number / arabic >= 1:
            roman_numeral = roman_numeral + roman_numerals[arabic]
            number -= arabic
    return roman_numeral

#print(roman(4))
