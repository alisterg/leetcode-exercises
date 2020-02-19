/**
 * Given a string containing just the characters '(' and ')', 
 * find the length of the longest valid (well-formed) parentheses substring.
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(parenthesesString) {

    for (let i = 0; i < parenthesesString.length; i++) {

        if (parenthesesString[i] === '(') {
            // Start another block of parentheses
            calculateSubstr(parenthesesBlock.substring(i + 1));
        }

        if (parenthesesString[i] === ')') {
            // Add this block of parentheses to the total

            // Move on to the next block
        }

    }
};
