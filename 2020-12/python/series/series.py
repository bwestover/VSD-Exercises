def slices(series, length):
  series_len = len(series)
  if length > series_len:
    raise ValueError('Too Big')
  if length <= 0:
    raise ValueError('Too small')

  window_start = 0
  results = []
  dont_overhang_end_of_sequence = window_start + length <= series_len
  while(dont_overhang_end_of_sequence):
    slice_start = window_start
    slice_end = window_start + length
    # assuming slice takes the start index and end index
    slice = series[slice_start:slice_end]
    results.append(slice)
    window_start = window_start + 1
    dont_overhang_end_of_sequence = window_start + length <= series_len
  return results

