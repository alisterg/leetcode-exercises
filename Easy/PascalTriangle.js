/**
 * Generate Pascal's Triangle of numRows
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows, triangle = [], currentRow = 0) {
    
    if (currentRow === numRows + 1) {
        triangle.shift();
        return triangle;
    }

    let row = [1];

    for (let j = 1; j < currentRow; j++) {
        const leftVal = triangle[currentRow - 1][j - 1] ? triangle[currentRow - 1][j - 1] : 1;
        const rightVal = triangle[currentRow - 1][j] ? triangle[currentRow - 1][j] : 0;

        row.push(leftVal + rightVal);
    }

    return generate(numRows, triangle.concat([row]), currentRow + 1);
};
