function digital_root(input) {
    const sum = input.toString().split('').reduce((acc, curr) => +acc + +curr);

    return sum < 10 ? +sum : digital_root(sum);
}