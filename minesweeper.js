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
  var results, adj, mineCounter;

  results = [];
  console.log(matrix)
  // Visit each square
  for (var i = 0; i < matrix.length; i++) {
    results.push(new Array(matrix[i].length).fill(0));
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

      // Check the adjacent squares for mines, if so increment results counter
      /*Top Mid*/ if (adj.pRow && matrix[i - 1][j]) results[i][j]++;
      /*Top Lef*/ if (adj.pRow && adj.pCol && matrix[i - 1][j - 1]) results[i][j]++;
      /*Top Rgt*/ if (adj.pRow && adj.nCol && matrix[i - 1][j + 1]) results[i][j]++;
      /*Bot Mid*/ if (adj.nRow && matrix[i + 1][j]) results[i][j]++;
      /*Bot Lef*/ if (adj.nRow && adj.pCol && matrix[i + 1][j - 1]) results[i][j]++;
      /*Bot Rgt*/ if (adj.nRow && adj.nCol && matrix[i + 1][j + 1]) results[i][j]++;
      /*Mid Lef*/ if (adj.pCol && matrix[i][j - 1]) results[i][j]++;
      /*Mid Rgt*/ if (adj.nCol && matrix[i][j + 1]) results[i][j]++;
        
      console.log('==============')
      console.log(i, j, adj)
      results.map(row => {
        console.log(row)
      });
    }
  }
  return results;
}



var matrix = [[false, false, false],
          [false, false, false]]

minesweeper(matrix)
