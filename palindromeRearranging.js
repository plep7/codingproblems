// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.


/*  The plan: Count the occurance of each letter in the string. As long as there's at most 1 odd
    the string can be rearranged into a palindrome */

function palindromeRearranging(inputString) {
  // Initialize countingObject and oddCounter
  var counterObj = {}, oddCounter = 0;
  // Iterate through the string
  for (var i = 0; i < inputString.length; i++) {
    // If letter exists, increment counter.  If not initialize key : value pair to letter : counter = 1
    counterObj[inputString[i]] ? counterObj[inputString[i]]++ : counterObj[inputString[i]] = 1;
  }
  // Iterate through the object
  for (var key in counterObj) {
    // If the counter is odd, increment odd counter
    if (counterObj[key] % 2 === 1) oddCounter++;
  }
  // Return odd counter < 2
  console.log(oddCounter < 2)
  return oddCounter < 2;
}

palindromeRearranging("aabbbc")
