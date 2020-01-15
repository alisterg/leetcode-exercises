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

    return "a1";
}

// probably use the constraint programming solution https://developers.google.com/optimization/cp/queens

