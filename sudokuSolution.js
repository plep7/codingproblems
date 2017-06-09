// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

// Example

// For

// grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//         ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//         ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//         ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//         ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//         ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//         ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
// the output should be
// sudoku2(grid) = true;

// For

// grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//         ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//         ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//         ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//         ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//         ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//         ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//         ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
// the output should be
// sudoku2(grid) = false.


function sudoku2(grid) {
  // Initialize duplicate object to keep track of numbers seen
  var duplicateTracker, row, col, element, rowLimit, colLimit;
  // Check rows for duplicates
  // Iterate over each row
  for (var i = 0; i < grid.length; i++) {
    row = grid[i];
    // Reinitialize duplicate object
    duplicateTracker = {};
    // Iterate over each element
    for (var j = 0; j < row.length; j++) {
      element = row[j];
      // If the element exists and is not a period, return false
      if (duplicateTracker[element] && element !== '.') return false;
      if (!duplicateTracker[element]) duplicateTracker[element] = true;
    }
  }

  // Check columns for duplicates
  // Iterate over each element element
  for (var i = 0, j = 0, col = grid[i]; j < grid[i].length; j++) {
    // Reinitialize duplicate object
    duplicateTracker = {};
    // Iterate over each row
    for (i = 0; i < grid.length; i++) {
      element = grid[i][j];
      // If the element exists and is not a period return false
      if (duplicateTracker[element] && element !== '.') return false;
      if (!duplicateTracker[element]) duplicateTracker[element] = true;
    }
    i = 0;
  }
  // Check each 3x3 block for duplicates
  // Iterate through each block
  for (var i = 0; i < grid.length; i += 3) {
    rowLimit = i + 3;
    for (var j = 0; j < grid[i].length; j += 3) {
      colLimit = j + 3;
      duplicateTracker = {};
      for (var k = i; k < rowLimit; k++) {
        for (var m = j; m < colLimit; m++) {
          element = grid[k][m];
          // Return false if a duplicate is found
          if (duplicateTracker[element] && element !== '.') return false;
          if (!duplicateTracker[element]) duplicateTracker[element] = true;
        }
      }
    }
  }
  // Return true
  return true;
}

console.log(sudoku2(grid))
