// Find the highest product of three numbers in an array

function highestProductOfThree(inputArray) {
  // Initialize a result variable to 1
  var result = 1;
  // Sort the input array
  inputArray.sort((a, b) => { return a - b; })
  // Determine if the two most negative numbers are larger than the second and third largest numbers
  if (inputArray[0] * inputArray[1] > inputArray[inputArray.length - 2] * inputArray[inputArray.length - 3]) {
    // If so set the result to the product of the negative numbers * the largest positive number
    result = inputArray[0] * inputArray[1] * inputArray[inputArray.length - 1];
  } else {
    // If not set the result to the product of the three largest numbers
    result = inputArray[inputArray.length - 1] * inputArray[inputArray.length - 2] * inputArray[inputArray.length - 3];
  }
  console.log(result)
  return result;
}

highestProductOfThree([1, 2, -3, 0, 4, -5, -1])