function mergeOverlappers(inputArr, idx = 0) {
    if (idx == inputArr.length - 1) return inputArr;

    let curr = inputArr[idx];
    let next = inputArr[idx + 1];

    if (checkOverlap(curr, next)) {
        // merge them
    }

    mergeOverlappers(idx + 1);
}

function checkOverlap(pairOne, pairTwo) {
    return (pairOne[1] > pairTwo[0] && pairOne[0] < pairTwo[1]) ||
        (pairTwo[1] > pairOne[0] && pairTwo[1] < pairOne[1]);
}