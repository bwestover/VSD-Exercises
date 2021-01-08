def is_paired(input_string):
    brakets=['{','}','[',']','(',')']

    string_of_brakets=""
    for character in input_string:
      if character in brakets:
          string_of_brakets+=character

    print(f"filtered: {string_of_brakets}")

    string_2=reduce_them(string_of_brakets)

    while len(string_2) < len(string_of_brakets):
        string_of_brakets=string_2
        string_2=reduce_them(string_of_brakets)

    if len(string_2)==0:
        return True

    return False

def reduce_them(string_of_brakets):
  print(f"Before reduce: {string_of_brakets}")
  string_of_brakets = string_of_brakets.replace('()', '')
  string_of_brakets = string_of_brakets.replace('[]', '')
  string_of_brakets = string_of_brakets.replace('{}', '')
  print(f"After reduce: {string_of_brakets}")
  return string_of_brakets
