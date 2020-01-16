/**
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

function queens(position, size) {
    if (size === 2 || size === 3) {
        // No solution for these cases
        return null;
    }

    // First we need to parse the starting position into an array

    return "a1";
}

/**
 * Converts a string into a pair eg. 'a3' into [1,3]
 * @param {string} coordinates 
 */
function parsePosition(coordinates) {
    const arr = coordinates.split('');

    // 'J' is column 10 (represented by zero)
    arr[0] = arr[0].toLowerCase() === 'j' ?
        arr[0].toLowerCase().charCodeAt() - 96 :
        0;

    arr[1] = Number(arr[1]);

    return arr;
}

/**
 * Converts a pair into a string eg. [1,3] into 'a3'
 * @param {Array} coordinates 
 */
function stringifyPosition(coordinates) {

    if (coordinates[0] === 0) {
        coordinates[0] = 10;
    }

    if (coordinates[1] === 10) {
        coordinates[1] = 0;
    }

    return [
        (coordinates[0] + 9).toString(36),
        coordinates[1]
    ].join('');

}

// probably use the constraint programming solution https://developers.google.com/optimization/cp/queens

