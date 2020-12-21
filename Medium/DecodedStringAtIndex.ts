export function decodeAtIndex(S: string, K: number): string {

    if (S.length < 2 || S.length > 100 || !/[a-z]/.test(S[0]) || /[^a-z2-9]/.test(S))
        throw new Error("Invalid input string");

    if (K < 1 || K > Math.pow(10, 9))
        throw new Error("Invalid index");

    return S.split('')
        .reduce((acc, curr, idx) => {            
            if (!/[a-z]/.test(S.substring(idx)))
                return acc + acc;

            const currToNumber = parseInt(curr);

            if (isNaN(currToNumber))
                return acc + curr;

            return acc.repeat(currToNumber);
        }, '')[K - 1];
}