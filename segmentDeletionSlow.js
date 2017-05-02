
function segmentDeletionSlow(left, right) {
  var result = 0;
  for (var i = 0; i < left.length; i++) {
    var rightBound = left[i];
    for (var j = 0; j < left.length; j++) {
      for (var k = 0; k < left.length; k++) {
        if (i !== k && left[k] <= rightBound && right[k] > rightBound) {
          rightBound = right[i];
        }
      }
    }
    if (rightBound < right[i]) {
      result++;
    }
  }
  console.log(result)
  return result;
}


var left = [4, 1, 1], right = [7, 3, 6];
segmentDeletionSlow([4, 1, 1], [7, 3, 6])
