/**
 * Find an O(n) solution for calculating a 
 * single row of Pascal's triangle.
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
    
    let result = [1];
    
    for (let i = 0; i < rowIndex; i++) {
        result.push(result[i] * (rowIndex - i) / (i + 1));
    }
    
    return result;
};