export function reverse(x: number): number {
    const maxAllowed = Math.pow(2, 31) - 1;

    if (x === 0) return 0;

    const isNegative = x < 0;
    const absoluteResult = +String(Math.abs(x).toString().split('').reverse().join(''));
    
    if (absoluteResult > maxAllowed) return 0;

    return isNegative ? -absoluteResult : absoluteResult;
}
