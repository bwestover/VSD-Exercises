function sortWord(word) {
  return [...word.toLowerCase()].sort().join('')
}

export const findAnagrams = (word, candidates) => {
  return candidates.filter(item => {
    return word.toLowerCase() !== item.toLowerCase() && sortWord(word) === sortWord(item)
  })
};

