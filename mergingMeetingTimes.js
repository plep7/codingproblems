function mergingMeetingTimes(input) {
  // Initialize a results stack
  var stack = [];
  // Sort the times
  input.sort((a, b) => {
    return a[0] - b[0];
  })
  console.log('input',input)
  // Initialize the stack with the smallest value
  stack.push(input[0])
  for (var i = 1; i < input.length; i++) {
    // Identify the top of the stack
    var top = stack[stack.length - 1];
    // Compare the next tuple to the top of the stack
    if (top[1] < input[i][0]) {
      // If there's no overlap, push the tuple on top of the stack
      stack.push(input[i])
    } else {
      // Else combined the tuples taking the largest and smallest values
      top[0] < input[i][0] ? top[0] = top[0] : top[0] = input[i][0];
      top[1] > input[i][1] ? top[1] = top[1] : top[1] = input[i][1];
    }
  }
  console.log('output',stack)
  return stack;
}

mergingMeetingTimes([[0, 1], [4, 8], [3, 5], [2, 4], [10, 12], [9, 10]])