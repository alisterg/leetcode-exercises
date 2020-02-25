/**
 * Given a string containing just the characters '(' and ')', 
 * find the length of the longest valid (well-formed) parentheses substring.
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(parenthesesString) {

    let openParenth = 0;
    let currentPairs = 0;
    let longestPair = 0;
    
    for (let i = 0; i < parenthesesString.length; i++) {
     
        if (parenthesesString[i] == '(') {
            openParenth++; 
        }
        else if (parenthesesString[i] == ')') {
            if (openParenth > 0) {
                openParenth--;
                currentPairs++;
            }
            else {
                if (currentPairs * 2 > longestPair) {
                    longestPair = currentPairs * 2;
                }
    
                currentPairs = 0;
                openParenth = 0;
            }
        }
    }

    return longestPair;
};

