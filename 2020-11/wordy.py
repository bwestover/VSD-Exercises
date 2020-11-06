def answer(question):
    if not question.startswith("What is"):
      raise ValueError("Invalid")

    question = question.replace("What is", "")
    question = question.replace("?", "")
    question = question.replace(" by ", " ")
    question = question.replace("plus", "+")
    question = question.replace("minus", "-")
    question = question.replace("multiplied", "*")
    question = question.replace("divided", "/")

    try:
      value = eval(question)
    except SyntaxError:
      raise ValueError("That's not valid, my dude.")

    return value
