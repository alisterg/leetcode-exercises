/*
 * The N-Queens Problem is a well known mathematical problem.
 * https://en.wikipedia.org/wiki/Eight_queens_puzzle
 * 
 * The objective is to place N queens on an NxN chessboard such that
 * none of the queens are threatening another.
 * 
 * In this challenge, we are given the position of one queen on the
 * board in the format 'c3' (column c, row 3). We need to compute the
 * positions of the other queens and return a comma-separated string
 * of coordinates, eg 'c3,a7,e6...etc'.
 * 
 * The chessboard size will only be of size 1-10
 */

class nQueens {
    constructor(boardSize, startPosition) {
        this.boardSize = boardSize;
        this.startPosition = this.parsePosition(startPosition);
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

                // TODO I think I need to flip this array
                for (let j = 0; j < this.boardSize; j++) {
                    if (boardMatrix[i][j] === this.startPosition[0]) {
                        return this.generateSolutionStringFromMatrix(boardMatrix);
                    }
                }
            }
        }

        for (let i = 0; i < this.boardSize; i++) {
            if (this.checkPosition(boardMatrix, row, i)) {
                boardMatrix[row][i] = true;

                this.solveQueens(boardMatrix, row + 1, this.boardSize);

                boardMatrix[row][i] = false; // Backtrack for next solution
            }
        }
    }

    /**
     * Generates the final solution given a board matrix
     * @param {Array} boardMatrix The board matrix
     */
    generateSolutionStringFromMatrix(boardMatrix) {
        let final = '';

        for (let i = 0; i < this.boardSize; i++) { // i = row
            for (let j = 0; j < this.boardSize; j++) { // j = col
                if (boardMatrix[i][j]) {
                    final += this.stringifyColumnPosition(j) + (i + 1);
                }
            }
        }

        return final;
    }

    /**
     * Converts a column position into its letter equivalent
     * eg. 0 will become 'a', 9 will become 'j' etc
     * @param {Number} position The zero-based column position
     */
    stringifyColumnPosition(position) {
        return position === 9 ? 'j' : (position + 10).toString(36);
    }

    /**
     * Checks a single square on a board to check if it is valid
     * @param {Array} boardMatrix The current state of the board
     * @param {Number} row Row coordinate to check
     * @param {Number} column Column coordinate to check
     */
    checkPosition(boardMatrix, row, column) {
        // Fail if the column is in use
        for (let i = 0; i < row; i++) {
            if (boardMatrix[i][column]) {
                return false;
            }
        }

        // Fail if the top diagonal is in use
        for (let i = row, j = column; i >= 0 && j >= 0; i--, j--){
            if (boardMatrix[i][j]) {
                return false;
            }
        }

        // Fail if the bottom diagonal is in use
        for(let i = row, j = column; j >= 0 && i < this.boardSize; i++, j--){
            if (boardMatrix[i][j]) {
                return false;
            }
        }

        return true;
    }
    
    /**
     * Converts a string into a pair eg. 'a3' into [1,3]
     * @param {string} coordinates 
     */
    parsePosition(coordinates) {
        const arr = coordinates.split('');

        // 'J' is column 10 (represented by zero)
        arr[0] = arr[0].toLowerCase() === 'j' ?
            0 :
            arr[0].toLowerCase().charCodeAt() - 97;

        arr[1] = Number(arr[1]);

        return arr;
    }

    /**
     * Converts a pair into a string eg. [1,3] into 'a3'.
     * If pair[0] is '0', then it converts it to 'j'
     * @param {Array} coordinates 
     */
    stringifyPosition(coordinates) {
        return [
            coordinates[0] === 0 ? 'j' : (coordinates[0] + 9).toString(36),
            coordinates[1] === 10 ? 0 : coordinates[1]
        ].join('');
    }
}

function queens(position, size) {
    if (size === 2 || size === 3) {
        // No solution for these cases
        return null;
    }

    const queenSolver = new nQueens(size, position);

    return queenSolver.solveQueens(queenSolver.defaultBoard, 0);
}
