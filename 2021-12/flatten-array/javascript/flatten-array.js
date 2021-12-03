export const flatten = (iterable) => {
// This filter function is killing our zero values
//  let output = iterable.flat(Infinity).filter(element => {
//    if (element !== undefined || element !== null) {
//      return element
//    }})
//    console.log(output)
//    return output
  let flattened = iterable.flat(Infinity)
  let output = []
  for (const element of flattened) {
    if (element !== undefined && element !== null) {
      output.push(element)
    }
  }
  return output
};

