// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
  // Initialize outputString and letter
  var outputString = '', letterCode, nextLetter;
  // Iterate through the string
  for (var i = 0; i < inputString.length; i++) {
    letterCode = inputString.charCodeAt(i);
    // Increment each charCodes
    nextLetter = String.fromCharCode(letterCode + 1)
    inputString[i] === 'z' ? outputString += 'a' : outputString += nextLetter;
  }
    // If the letter is Z change it to A
  return outputString
}

console.log(alphabeticShift('crazy'))
