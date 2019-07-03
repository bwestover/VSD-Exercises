import string

file = open("./p022_names.txt", "r")

names = sorted(file.read().replace('"',"").split(","))

total = 0
for i in range(0,len(names)):
    letter_score = 0
    for letter in names[i]:
        letter_score += string.ascii_uppercase.find(letter)+1
    total += letter_score * (i + 1)

print(f"Total: {total}")
