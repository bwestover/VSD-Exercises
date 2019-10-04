
// Exercise is from Project Euler - #17 "Number letter counts"
// If the numbers 1 to 5 are written out in words: one, two, three, four, five,
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in
// words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two)
// contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.

// The use of "and" when writing out numbers is in compliance with British usage.

ones = {
  1:"one",
  2:"two",
  3:"three",
  4:"four",
  5:"five",
  6:"six",
  7:"seven",
  8:"eight",
  9:"nine"
}

teens = {
  10:"ten",
  11:"eleven",
  12:"twelve",
  13:"thirteen",
  14:"fourteen",
  15:"fifteen",
  16:"sixteen",
  17:"seventeen",
  18:"eighteen",
  19:"nineteen"
}

tens_place = {
  0:"",
  2:"twenty",
  3:"thirty",
  4:"forty",
  5:"fifty",
  6:"sixty",
  7:"seventy",
  8:"eighty",
  9:"ninety"
}

function to_names(numeral){
  let strNum = numeral.toString()
  let output = ""
  if (strNum.length == 4){
    return "onethousand"
  }

  if (strNum.length == 3){
    if (strNum.substring(1,3) === "00"){
      output = ones[strNum.substring(0,1)] + "hundred"
      return output
    }
    else {
      output = ones[strNum.substring(0,1)] + "hundredand"
    }
    strNum = strNum.substring(1,3)
    //console.log(strNum)
  }
  //console.log(strNum)
  if (strNum.length == 2){
    if (strNum.substring(0,1) === "1"){
    //we've got a teen
      output = output + teens[strNum]
      return output
    }
    else {
      output = output + tens_place[strNum.substring(0,1)]
      if (strNum.substring(1,2) === "0"){
        return output
      }
      strNum = strNum.substring(1,2)
    }
  }
  output = output + ones[strNum]
  return output;
}

//console.log(to_names(100))
sum = 0
for (let i=1;i<=1000;i++){
  // if (to_names(i).includes("undefined")){
  //   console.log("AAAAAAAAHHHHHHHH")
  //   console.log(i)
  // }
  sum = sum + to_names(i).length
  console.log(to_names(i).padEnd(30) + "  " + to_names(i).length.toString().padEnd(4) + "  " + sum.toString())
}
console.log(sum)
