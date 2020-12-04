//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const accumulate = (collection, operation) => {
//   throw new Error("Remove this statement and implement this function");
// };
/*
function len(collection){
  return collection.length;
}*/

function append(element) {
  this.push(element);
}

Array.prototype.append = append;
export function accumulate(collection, operation){
  const res = []
  let current_index = 0
  while(current_index < collection.length) {
    const element=collection[current_index]
    current_index = current_index + 1
    res.append(operation(element))
  }
  return res
}

function accumulateBinder() {
  return accumulate(this);
}

Array.prototype.map = accumulateBinder;

