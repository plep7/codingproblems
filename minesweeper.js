// create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]       

function minesweeper(matrix) {
  // Initialize a counter for each square to 0
  var results, adj;

  results = new Array(matrix.length).fill(new Array(matrix.length).fill(0));
  console.log(matrix)
  // Visit each square
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      // Reset presence check
      adj = { 
          pRow: false,
          pCol: false,
          nRow: false, 
          nCol: false
        };

      // Check if an adjacent space even exists
      if (matrix[i - 1] !== undefined) adj.pRow = true;
      if (matrix[i + 1] !== undefined) adj.nRow = true;
      if (matrix[i][j - 1] !== undefined) adj.pCol = true;
      if (matrix[i][j + 1] !== undefined) adj.nCol = true;

      console.log(i, j, adj)
    }
  }
  // Check the adjacent squares for mines
    // Check if there is a previous row
      // If so check if there is a previous column
        // If so check
  // If there is a mine in an adjacent square, increment counter

}


var matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]

minesweeper(matrix)
