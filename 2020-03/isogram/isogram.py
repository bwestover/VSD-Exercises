import re

def is_isogram(string):
    new_string = re.sub(r'[^a-z]', '', string.lower())
    return len(new_string) == len(set(new_string))
