// Given a string str and array of pairs that indicates which indices in the string can be swapped, return the lexicographically largest string that results from doing the allowed swaps. You can swap indices any number of times.

// Example

// For str = "abdc" and pairs = [[1, 4], [3, 4]], the output should be
// swapLexOrder(str, pairs) = "dbca".

// By swapping the given indices, you get the strings: "cbda", "cbad", "dbac", "dbca". The lexicographically largest string in this list is "dbca".

function swapLexOrder(str, pairs) {
  // Initialize a doesIt array, anyNewStr
  // While we keep finding new strings
  // Set anyNewStr to false
  // Iterate through the pairs
    // Swap the given indices
    // Check if the new string is in the doesIt array
    // If not, push the value into the array and set anyNewStr to true
  // Sort the doesIt array largest to smallest
  // Return the first element

}

cbda
cbad
dbac
dbca

3241
3214
4213
4231

