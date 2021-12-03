def flatten(iterable, recurse=False):
    global output_list
    if not recurse:
      output_list = []
    for item in iterable:
      if isinstance(item, list):
        flatten(item, True)
      else:
        if item != None:
          output_list.append(item)
    return output_list
