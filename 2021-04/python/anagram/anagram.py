def find_anagrams(word, candidates):
  sorted_word = sorted(word.lower())
  lowered_word = word.lower()

  anagrams = []
  for candidate in candidates:
    candidate_lower = candidate.lower()
    if candidate_lower != lowered_word and sorted_word == sorted(candidate_lower):
      anagrams.append(candidate)

  return anagrams

  # Crazy dense one-liner
  # return [candidate for candidate in candidates if candidate.lower() != word.lower()
    # and sorted_word == sorted(candidate.lower())]
