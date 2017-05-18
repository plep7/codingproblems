// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
// arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  // If the element matches the elemToReplace, substitute it
  return inputArray.map(element => element === elemToReplace ? substitutionElem : element);
}

var inputArray = [1, 2, 1]

console.log(arrayReplace(inputArray, 1, 3))