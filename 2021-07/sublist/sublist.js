// We got started on this but ran out of time.

export class List {
  constructor(array) {
    this.array = array;
  }

  compare(otherList) {
    otherArray = otherList.array;
    let firstIndex = this.array.findIndex((element) => element == otherArray[0])
    if(firstIndex){
      if(otherArray.length > this.array.length){
        // possible sublist
        // smaller is this.array
        let cIndex = firstIndex + 1;

        for(let i = firstIndex + 1; i < this.array.length; i++){
          if(this.array[i] !== otherArray[]){
            // sublist
            return "SUBLIST"
          }
        }
        return "EQUAL"
      } else if (this.array.length > otherArray.length){
        // possible superlist
        // smaller is otherArray
      } else {
        // possible equal
      }
    } else {
      return("UNEQUAL")
    }
  }
}

