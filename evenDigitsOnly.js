// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.

function evenDigitsOnly(n) {
  var numArray = n.toString().split('');

  return numArray.every(element => element % 2 === 0)
}

console.log(evenDigitsOnly(248622))
console.log(evenDigitsOnly(248621))
