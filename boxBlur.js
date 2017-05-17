/*The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

Example

For

var image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.
*/


function boxBlur(image) {
  // Initialize a results matrix and current sum
  var result = [], sum;

  // Iterate over each row
  for (var i = 0; i < image.length - 2; i++) {
    // Start a new array for each row
    result.push([]);
    // Iterate through the rows
    for (var j = 0; j < image.length - 2; j++) {
      // Reset sum for each row element
      sum = 0;
      // Add three horizontal elements for three rows to the sum
      for (var k = j; k < j + 3; k++) {
        for (var l = i; l < i + 3; l++) {
          sum += image[l][k]
          console.log(sum)
        }
      }
      // Push the sum into the results row
      result[i].push(Math.floor(sum / 9))
    }
  }
  console.log(result)
  return result;
}

var image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]

boxBlur(image)
