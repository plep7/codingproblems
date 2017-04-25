function rectangleIntersection(r1, r2) {
  // Initialize a result
  var result = {}, minX, minY, maxX, maxY;
  // Find the smaller x and y coordinates
  if (r1.x < r2.x) {
    minX = r1;
    maxX = r2;
  } else {
    minX = r2;
    maxX = r1;
  }
  if (r1.y < r2.y) {
    minY = r1;
    maxY = r2;
  } else {
    minY = r2;
    maxY = r1;
  }

  console.log('minX', minX.x)
  console.log('minY', minY.y)
  console.log('maxX', maxX.x)
  console.log('maxY', maxY.y)

  // Determine if there's BOTH x and y overlap
  if (minX.x + minX.width > maxX.x && minY.y + minY.height > maxY.y) {
    // If so, build the overlapping rectangle
    result.x = maxX.x;
    result.y = maxY.y;
    result.width = minX.x + minX.width - maxX.x;
    result.height = minY.y + minY.height - maxY.y;
  } else {
    // If not, state that there's no overlap
    result = 'There is no overlap between these rectangles'
  }

  console.log(result)
  return result;
}

var rectangle1 = {
  //  coordinates of bottom-left corner: 
  'x': 1,
  'y': 5,
  //  width and height 
  'width': 10, 
  'height': 4
}

var rectangle2 = {
  //  coordinates of bottom-left corner: 
  'x': 6,
  'y': 6,
  //  width and height 
  'width': 4, 
  'height': 10
}

rectangleIntersection(rectangle1, rectangle2)