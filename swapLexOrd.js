// Given a string str and array of pairs that indicates which indices in the string can be swapped, return the lexicographically largest string that results from doing the allowed swaps. You can swap indices any number of times.

// Example

// For str = "abdc" and pairs = [[1, 4], [3, 4]], the output should be
// swapLexOrder(str, pairs) = "dbca".

// By swapping the given indices, you get the strings: "cbda", "cbad", "dbac", "dbca". The lexicographically largest string in this list is "dbca".

function swapLexOrder(str, pairs) {
  // Initialize a doesIt array, anyNewStr
  var doesIt = [], anyNewStr = true, indexA, indexB;
  // While we keep finding new strings
  while (anyNewStr) {
  // Set anyNewStr to false
  anyNewStr = false;
  // Iterate through the pairs
  for (var i = 0; i < pairs.length; i++) {
    indexA = pairs[i][0] - 1;
    indexB = pairs[i][1] - 1;
    // Swap the given indices
    console.log('index and string', indexA, indexB, str)
    console.log('indexA&B', str[indexA], str[indexB])
    console.log('begSubstr', str.substr(0, indexA))
    console.log('midSubstr', str.substr(indexA + 1, indexB - indexA - 1))
    console.log('endSubstr', str.substr(indexB, str.length - 1 - indexB))
    str = str.substr(0, indexA) + str[indexB] + str.substr(indexA + 1, indexB - indexA - 1) + str[indexA] + str.substr(indexB, str.length - 1 - indexB)
    console.log('result', str)
    console.log('==================')
    
    // Check if the new string is in the doesIt array
    // If not, push the value into the array and set anyNewStr to true
  }
  // Sort the doesIt array largest to smallest
  // Return the first element
  }

}

var str = 'adbc';
var pairs = [[1, 4], [3, 4]];

console.log(swapLexOrder(str, pairs))