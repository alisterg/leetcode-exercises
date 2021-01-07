/**
 * Finds the letter combinations possible for a string of digits for a 
 * standard phone keypad (eg. 2=abc etc)
 * @param digits
 */
export function letterCombinations(digits: string): Array<string> {

  if (digits.length > 4 || /[\D10]/.test(digits)) throw new Error("Invalid input");
  if (digits.length === 0) return [];
  
  const result = [""];
  
  digits.split("").forEach((val, idx) => {
    while (result[0].length === idx) {
      let first = result.shift();

      alphaMap[digits[idx]].forEach(alph => {
        result.push(first + alph);
      })
    }
  });
  
  return result;
}

const alphaMap = {
  2: ["a","b","c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
}
