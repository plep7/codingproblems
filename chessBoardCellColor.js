// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

var chessBoardCellColor = (cell1, cell2) => cellValue(cell1) % 2 === cellValue(cell2) % 2;

var cellValue = cell => cell.charCodeAt(0) + Number(cell[1]);

console.log(chessBoardCellColor('B3', 'A4'))