/**
 * Given a string containing just the characters '(' and ')', 
 * find the length of the longest valid (well-formed) parentheses substring.
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(parenthesesString) {

    let stack = [-1];
    let result = 0;

    for (let i = 0; i < parenthesesString.length; i++) {
        if (parenthesesString[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length > 0) {
                let currentSubstringLen = i - stack[stack.length - 1];

                result = result >= currentSubstringLen ? result : currentSubstringLen;
            } else {
                stack.push(i);
            }
        }
    }

    return result;
};
