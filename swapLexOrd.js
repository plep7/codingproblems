// Given a string str and array of pairs that indicates which indices in the string can be swapped, return the lexicographically largest string that results from doing the allowed swaps. You can swap indices any number of times.

// Example

// For str = "abdc" and pairs = [[1, 4], [3, 4]], the output should be
// swapLexOrder(str, pairs) = "dbca".

// By swapping the given indices, you get the strings: "cbda", "cbad", "dbac", "dbca". The lexicographically largest string in this list is "dbca".

function swapLexOrder(str, pairs) {
  if (pairs.length < 1) return str;
  // Initialize a doesIt array, anyNewStr
  var newStr, anyNewStr = true, indexA, indexB, largest = str;
  // While we keep finding new strings
  while (anyNewStr) {
    // Set anyNewStr to false
    anyNewStr = false;
    // Iterate through the pairs
    for (var i = 0; i < pairs.length; i++) {
      pairs[i].sort((a, b) => a - b)
      // console.log(pairs[i])
      indexA = pairs[i][0] - 1;
      indexB = pairs[i][1] - 1;
      // Swap the given indices
      console.log('init', str)
      console.log('begStr', str.substr(0, indexA))
      console.log('indexB', str[indexB]) 
      console.log('midStr', str.substr(indexA + 1, indexB - indexA - 1))
      console.log('indexA', str[indexA])
      console.log('endStr', str.substr(indexB + 1, str.length - 1 - indexB))

      newStr = str.substr(0, indexA) + str[indexB] + str.substr(indexA + 1, indexB - indexA - 1) + str[indexA] + str.substr(indexB + 1, str.length - 1 - indexB)
      console.log('result', newStr)
      console.log('============================')
      
      // Check if the new string is in the doesIt array
      if (newStr > largest) {
        // If not, push the value into the array and set anyNewStr to true
        largest = newStr
        anyNewStr = true;
        console.log('***********', str, largest, '************')
      }
      str = newStr;
    }
  }
  // Return the last element
  return largest;
}

var str = 'acxrabdz';
var pairs = [[1,3], 
 [6,8], 
 [3,8], 
 [2,7]]

console.log(swapLexOrder(str, pairs))