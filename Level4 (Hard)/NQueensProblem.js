/*
 * The N-Queens Problem is a well known mathematical problem.
 * https://en.wikipedia.org/wiki/Eight_queens_puzzle
 * 
 * The objective is to place N queens on an NxN chessboard such that
 * none of the queens are threatening another.
 * 
 * In this challenge, we are given the position of one queen on the
 * board in the format 'c3' (column c, row 3). NOTE: row 1 is the bottom row.
 * 
 * We need to compute the positions of the other queens and return a 
 * comma-separated string of coordinates, eg 'c3,a7,e6...etc'.
 * 
 * The chessboard size will only be of size 1-10
 */

class nQueens {
    constructor(startPosition, boardSize) {
        this.boardSize = boardSize;
        this.startPosition = this.parseStartPosition(startPosition);
        this.finalSolution = null;
    }

    /**
     * Generates starting board matrix (all values false)
     */
    get defaultBoard() {
        const defaultBoard = [];

        for (let i = 0; i < this.boardSize; i++) {
            if (!defaultBoard[i]) {
                defaultBoard[i] = [];
            }

            for (let j = 0; j < this.boardSize; j++) {
                defaultBoard [i][j] = false;
            }
        }

        return defaultBoard;
    }

    /**
     * Recursively solves the N queens problem. Uses a backtracking method to
     * find all possible solutions, until a solution is found that includes our 
     * starting position.
     * @param {Array} boardMatrix The board
     * @param {Number} row Current row
     */
    solveQueens(boardMatrix, row) {
        if (row == this.boardSize) {
            // Solution is complete, check it for our starting position
            for (let i = 0; i < this.boardSize; i++) {
                // i is row, j is column
                if (i !== this.startPosition[1]) {
                    continue;
                }

                for (let j = 0; j < this.boardSize; j++) {
                    if (j === this.startPosition[0] && boardMatrix[i][j]) {
                        this.finalSolution = this.generateSolutionStringFromMatrix(boardMatrix);
                        return this.finalSolution;
                    }
                }
            }
        }

        for (let column = 0; column < this.boardSize; column++) {
            if (this.checkPosition(boardMatrix, row, column)) {
                boardMatrix[row][column] = true;

                this.solveQueens(boardMatrix, row + 1, this.boardSize);

                if (this.finalSolution) {
                    return this.finalSolution;
                }

                boardMatrix[row][column] = false; // Backtrack for next solution
            }
        }
    }

    /**
     * Generates the final solution given a board matrix.
     * @param {Array} boardMatrix The board matrix
     */
    generateSolutionStringFromMatrix(boardMatrix) {
        let final = '';

        for (let i = 0; i < this.boardSize; i++) { // i = row
            for (let j = 0; j < this.boardSize; j++) { // j = col
                if (boardMatrix[i][j]) {
                    let flippedRow = this.boardSize - i;
                    if (flippedRow === 10) flippedRow = 0;

                    final += this.stringifyColumnPosition(j) + flippedRow + ',';
                }
            }
        }

        return final.slice(0, -1);
    }

    /**
     * Converts a column position into its letter equivalent.
     * eg. 0 will become 'a', 9 will become 'j' etc
     * @param {Number} position The zero-based column position
     */
    stringifyColumnPosition(position) {
        return position === 9 ? 'j' : (position + 10).toString(36);
    }

    /**
     * Checks a single square on a board to check if it is valid.
     * @param {Array} boardMatrix The current state of the board
     * @param {Number} row Row coordinate to check
     * @param {Number} column Column coordinate to check
     */
    checkPosition(boardMatrix, row, column) {
        // Fail if the column is in use
        for (let rowToCheck = 0; rowToCheck < row; rowToCheck++) {
            if (boardMatrix[rowToCheck][column]) {
                return false;
            }
        }

        // Fail if the left diagonal is in use
        for (let rowToCheck = row, columnToCheck = column; rowToCheck >= 0 && columnToCheck >= 0; rowToCheck--, columnToCheck--){
            if (boardMatrix[rowToCheck][columnToCheck]) {
                return false;
            }
        }

        // Fail if the right diagonal is in use
        for(let rowToCheck = row, columnToCheck = column; rowToCheck >= 0 && columnToCheck < this.boardSize; rowToCheck--, columnToCheck++){
            if (boardMatrix[rowToCheck][columnToCheck]) {
                return false;
            }
        }

        return true;
    }
    
    /**
     * Converts a string into a pair eg. 'a3' into [1,3]
     * @param {string} coordinates 
     */
    parseStartPosition(coordinates) {
        const arr = coordinates.split('');

        // 'J' is column 10 (represented by zero)
        arr[0] = arr[0].toLowerCase() === 'j' ?
            9 :
            arr[0].toLowerCase().charCodeAt() - 97;

        // need to 'flip' the row because 1 is the bottom row
        arr[1] = this.boardSize - Number(arr[1]);

        if (arr[1] === 10) arr[1] = 0;

        return arr;
    }
}

function queens(position, size) {
    if (size === 2 || size === 3) {
        // No solution for these cases
        return position;
    }

    const queenSolver = new nQueens(position, size);

    return queenSolver.solveQueens(queenSolver.defaultBoard, 0);
}
