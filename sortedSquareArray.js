// Note: Come up with a linear solution, since that is what you would be asked to do in an interview.

// You have a sorted array of integers. Write a function that returns a sorted array containing the squares of those integers.

// Example

// For array = [-6, -4, 1, 2, 3, 5], the output should be
// sortedSquaredArray(array) = [1, 4, 9, 16, 25, 36].

// The array of squared integers from array is: [36, 16, 1, 4, 9, 25]. When sorted, it becomes: [1, 4, 9, 16, 25, 36].


var array = [-6, -4, 1, 2, 3, 5];

function sortedSquaredArray(array) {
  var results = []
  // Iterate through the array and square each value
  array.forEach(element => results.push(element * element))
  // Return the sorted squared array
  return results.sort((a, b) => a - b)
}

console.log(sortedSquaredArray(array))
