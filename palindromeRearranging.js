// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.


/*  The plan: Count the occurance of each letter in the string. As long as there's at most 1 odd
    the string can be rearranged into a palindrom */

function palindromeRearranging(inputString) {
  // Initialize countingObject and oddCounter
  // Iterate through the string
    // If letter exists, increment counter
    // If not initialize key : value pair to letter : counter = 1
  // Iterate through the object
    // If the counter is odd, increment odd counter
  // Return odd counter < 2
}
