var RomanNumeral = {
  toRoman(number) {
    console.log(number)
    // initialize a results string
    // 
  },
  fromRoman(numeral) {
    console.log(numeral)
    // initialize a result variable to 0
    var current, next, total = 0;
    // iterate through the string
    for (var i = 0; i < numeral.length; i++) {
      current = conversion[numeral[i]];
      next = conversion[numeral[i + 1]];

      if (next && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
    console.log('result', total)
    return total;
    // if the next value is smaller, subtract from total
    // else add it to the total
  }
}


var conversion = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

RomanNumeral.toRoman(1000)
RomanNumeral.fromRoman('IV')
