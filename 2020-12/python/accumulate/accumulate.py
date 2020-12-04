def accumulate(collection, operation):
    # def accumulate(collection, operation):
    #     res = []
    #     for element in collection:
    #       res.append(
    #         #here is where we call the operation
    #         operation(element)
    #       )
    #     return res


def accumulate(collection, operation):
  res = []
  current_index = 0
  while(current_index < len(collection)):
    element=collection[current_index]
    current_index = current_index + 1
    res.append(operation(element))
  return res


