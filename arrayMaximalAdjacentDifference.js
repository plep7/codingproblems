// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
  // Initialize maxDiff, currDiff
  var currDiff, maxDiff;
  // Iterate through the array
  for (var i = 0; i < inputArray.length; i++) {
    // Compare current element with previous element
    // If current element is bigger, difference is curr - prev, else prev - curr
    inputArray[i] > inputArray[i - 1] ? currDiff = inputArray[i] - inputArray[i - 1] : currDiff = inputArray[i - 1] - inputArray[i];
    // If currDiff is greater than maxDiff, set maxDiff to currDiff
    if (currDiff > maxDiff || !maxDiff) maxDiff = currDiff;
  }
  console.log(maxDiff)
  return maxDiff;
}

arrayMaximalAdjacentDifference([2, 4, 1, 0])