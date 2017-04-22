function mergingMeetingTimes(input) {
  // Initialize results array
  var results = [];
  // Sort the times
  input.sort((a, b) => {
    return a[0] - b[0];
  })
  console.log('input',input)
  results.push(input[0])
  for (var i = 1; i < input.length; i++) {
    var top = results[results.length - 1];


    if (top[1] < input[i][0]) {
      console.log(top[1], input[i][0])
      results.push(input[i])
    } else {
      top[0] < input[i][0] ? top[0] = top[0] : top[0] = input[i][0];
      top[1] > input[i][1] ? top[1] = top[1] : top[1] = input[i][1];
    }
  }
  console.log('output',results)
  return results;
}

mergingMeetingTimes([[0, 1], [4, 8], [3, 5], [2, 4], [10, 12], [9, 10]])