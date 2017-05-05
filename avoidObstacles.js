// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

function avoidObstacles(inputArray) {
  // Initialize smallestFactor, jumpSizeObj, jumpSize
  // Sort the input array
  // Iterate through the input array
    // Start at element mod 2 and increase jumpSize until largest element is reached
    // If the jumpSize applied to the element has a remainder
      // Either create or increment the value in the jumpSizeObj
  // Iterate through the jumpSizeObj
    // If the value is equal to the inputArray length
      // Compare and replace the key as the smallestFactor
  // Return smallestFactor
}