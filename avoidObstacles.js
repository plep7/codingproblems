// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

function avoidObstacles(inputArray) {
  // Initialize smallestFactor, jumpSizeObj, jumpSize
  var smallestFactor, jumpSize, element, jumpSizeObj = {};
  // Sort the input array
  inputArray.sort((a, b) => {
    return a - b;
  })
  smallestFactor = inputArray[inputArray.length - 1] + 1;
  // Iterate through the input array
  for (var i = 0; i < inputArray.length; i++) {
    element = inputArray[i];
    // Start at element mod 2 and increase jumpSize until largest element is reached
    for (jumpSize = 0; jumpSize < inputArray[inputArray.length - 1]; jumpSize++) {
      // If the jumpSize applied to the element has a remainder
      if (element % jumpSize > 0) {
        // Either create or increment the value in the jumpSizeObj
        jumpSizeObj[jumpSize] ? jumpSizeObj[jumpSize]++ : jumpSizeObj[jumpSize] = 1;
      }
    }
  }
  console.log('object', jumpSizeObj)
  // Iterate through the jumpSizeObj
  for (var key in jumpSizeObj) {
    // If the value is equal to the inputArray length
    if (jumpSizeObj[key] === inputArray.length && Number(key) < smallestFactor) {
      // Compare and replace the key as the smallestFactor
      smallestFactor = Number(key);
    }
  }
  // Return smallestFactor
  console.log(smallestFactor)
  return smallestFactor;
}

avoidObstacles([5, 3, 6, 7, 9])