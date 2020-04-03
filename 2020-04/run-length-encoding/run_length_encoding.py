# This is a partial solution to one of the two required functions.
# We ran over time before we could finish it up. Pull Requests Welcome :D

def decode(string):
    pass


def encode(string):
    if len(string) < 2:
        return string
    output = ""
    prev_letter = string[0]
    count = 0
    for i in range(len(string)):

        if i < len(string) and string[i] == prev_letter:
            count += 1
        elif i == len(string):
            if count == 0:
                output += prev_letter
            else:
                output += str(count) + prev_letter
        else:
            prev_letter=string[i]
            if count == 0:
                output += prev_letter
            else:
                output += str(count) + prev_letter
                count = 0

    return output
