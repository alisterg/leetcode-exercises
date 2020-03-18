/*
* Validate a given 9x9 sudoku board, where empty squares contain the '.' character.
* For the problem, we can assume that each element x, x > 0 and x < 10
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    
    // Validate each row
    for (let i = 0; i < 9; i++) {
        if (!validateSingleArray(board[i])) return false;
    }

    // Validate each column
    for (let i = 0; i < 9; i++) {
        const currentColumn = [];
        board.forEach(currentRow => {
            currentColumn.push(currentRow[i]);
        });

        if (!validateSingleArray(currentColumn)) return false;
    }

    // Validate each square
    const squares = [];
    for (let i = 0; i < 3; i++) {
        board.forEach(row => {
            for (let j = 0; j < 3; j++) {
                squares.push(row.shift());
            }
        });
    }

    for (let i = 0; i < 9; i++) {
        let currSlice = squares.slice(i * 9, i * 9 + 9);

        if (!validateSingleArray(currSlice)) return false;
    }

    return true;
};

/**
 * Validates a single row, column or square for a sudoku board.
 * Empty ('.') squares are ignored 
 * @param {Array} arr The 9x9 array to validate
 */
function validateSingleArray(arr) {

    arr = arr.filter(val => val !== '.');

    // Checks there are no duplicates
    return (new Set(arr)).size === arr.length;
}