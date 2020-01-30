/**
 * Computes the sum of intervals.
 * Overlapping intervals are combined into one.
 * @param {array} intervals Array of intervals eg. [ [1,3],[4,6] ]
 */
function sumIntervals(intervals){
    intervals.sort((a, b) => a[1] - b[1]);
  
    // Create an array of [min1, min2]
    let finalSorted = intervals.slice()
      .sort((a, b) => a[0] - b[0])
      .map((val, idx) => [val[0], intervals[idx][1]]);
    
    let total = 0;
    
    // Compare each inner pair and sum if necessary
    for (let i = finalSorted.length - 1; i >= 0; i--) {
        if (i === 0) {
            total += finalSorted[i][1] - finalSorted[i][0];
            break;
        }
    
        if (finalSorted[i][0] < finalSorted[i - 1][1]) {
            finalSorted[i - 1][1] = finalSorted[i][1];
        } else {
            total += finalSorted[i][1] - finalSorted[i][0];   
        }
    }
    
    return total;
}