export function romanToInt(s: string): number {
    if (s.length < 1 || s.length > 15)
        throw new Error("Invalid input length");
    
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const next = s[i + 1];
        
        if (s[i] === "I") total += (next === "V" || next === "X") ? -1 : 1;
        if (s[i] === "V") total += 5;
        if (s[i] === "X") total += (next === "L" || next === "C") ? -10 : 10;
        if (s[i] === "L") total += 50;
        if (s[i] === "C") total += (next === "D" || next === "M") ? -100 : 100;
        if (s[i] === "D") total += 500;
        if (s[i] === "M") total += 1000;
    }
    
    return total;
}