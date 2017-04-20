
// [1, 7, 4, 3]
// [8, 12, 28, 21]

// Naive solution O(n^2) time O(n) space
function productOfAllOtherNumbers(inputArray) {
  // Initialize a results array
  var results = []
  // Iterate through the array
  for (var i = 0; i < inputArray.length; i++) {
    // Initialize a product variable
    var product = 1;
    for (var j = 0; j < inputArray.length; j++) {
      // Omit the current index
      if (i === j) continue;
      // Multiply the product variable by each element of the array
      product *= inputArray[j];
    }
    // Push the product into the results array
    results.push(product)
  }
  console.log(results)
  return results;
}

productOfAllOtherNumbers([1, 7, 4, 3])