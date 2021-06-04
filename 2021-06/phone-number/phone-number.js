export const clean = (input) => {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var expPunct = ["(",")","+",".", " ","-"]
  var digits = "";

  for (let c in input) {
    if (numbers.includes(input[c])) {
      digits = digits + input[c];
    } else if((input[c] >= "a" && input[c] <= "z") || (input[c] >= "A" && input[c] <= "Z")) {
      throw new Error('Letters not permitted');
    } else if(!expPunct.includes(input[c])) {
      throw new Error('Punctuations not permitted');
    }
  }

  // check length
  if (digits.length < 10)
  {
    throw new Error('Incorrect number of digits');
  }
  else if(digits.length == 11 && digits[0] !== "1") {
    throw new Error('11 digits must start with 1');
  }
  else if (digits.length > 11)
  {
    throw new Error('More than 11 digits');
  }

  //check first digit
  var num = digits.length == 11 ? digits.substring(1) : digits;
  if(num[0] == "0"){
    throw new Error('Area code cannot start with zero')
  } else if(num[0] == "1"){
    throw new Error('Area code cannot start with one')
  } else if(num[3] == "0"){
    throw new Error('Exchange code cannot start with zero')
  } else if(num[3] == "1"){
    throw new Error('Exchange code cannot start with one')
  }

  return num;
};
