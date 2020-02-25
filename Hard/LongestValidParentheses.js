/**
 * Given a string containing just the characters '(' and ')', 
 * find the length of the longest valid (well-formed) parentheses substring.
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(parenthesesString) {

    // Start calculating for a substring (i = 0)
    // Adding opening braces is always valid
    // If we have 1 too few OR 1 too many closing braces
        // it is invalid, backtrack to the previous iteration
    // find the valid count of the current substring, set it to the MAX if applicable
    // When we have processed all substrings, return MAX

    for (let i = 0; i < parenthesesString.length; i++) {

        if (parenthesesString[i] === '(') {
            // Start another block of parentheses
            //calculateSubstr(parenthesesBlock.substring(i + 1));
        }

        if (parenthesesString[i] === ')') {
            // Add this block of parentheses to the total

            // Move on to the next block
        }

    }
};

()()(((())))))(