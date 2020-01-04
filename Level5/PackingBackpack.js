/*
 * You are given two arrays as input, where a1[i] is the
 * score of the item, and a2[i] is the weight of the item.
 * 
 * Get the maximum score possible given a "weight capacity" which
 * cannot be exceeded
 */

// https://en.wikipedia.org/wiki/Knapsack_problem
function packBagpack(scores, weights, capacity) {

    const table = [];

    // Fill table with zeros
    for (let i = 0; i <= scores.length; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (typeof table[i] === 'undefined') table[i] = [];

            table[i][j] = 0;
        }
    }

    // For each item, determine if we want to take it
    for (let i = 1; i <= scores.length; i++) {
        for (let j = 0; j <= capacity; j++) {
            table[i][j] = table[i - 1][j];
            
            if (j >= weights[i-1] && table[i][j] < table[i - 1][j - weights[i - 1]] + scores[i - 1]) {
                table[i][j] = table[i - 1][j - weights[i - 1]] + scores[i - 1]; 
            }
        }
    }
    
    return table[scores.length][capacity];
}