/**
 * Reverse an array of characters *in place*
 * @param {Array} str Array of characters to reverse
 */
const reverseString = str => {
    reverser(0, str);
};

const reverser = (idx, str) => {
    if (str == null || idx >= str.length) return;

    reverser(idx + 1, str);

    str.push(str.splice(idx, 1)[0]);
}