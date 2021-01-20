export function maximumSwap(num: number): number {

  if (num > Math.pow(10, 8) || num < 0) throw new Error("Number out of bounds");
  
  const numArr = num.toString().split("");
  
  let maxIdx = -1;
  let maxDigit = -1;
  let leftIdx = -1;
  let rightIdx = -1;
  
  for (let i = numArr.length - 1; i >= 0; i--) {
    if (+numArr[i] > maxDigit) {
      maxDigit = +numArr[i];
      maxIdx = i;
      continue;
    }
    
    if (+numArr[i] < maxDigit) {
      leftIdx = i;
      rightIdx = maxIdx;
    }
  }
  
  if (leftIdx === -1) return num;
  
  let temp = numArr[leftIdx];
  numArr[leftIdx] = numArr[rightIdx];
  numArr[rightIdx] = temp;
  
  return +numArr.join("");  
}