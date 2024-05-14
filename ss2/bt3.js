function allPositiveNumbers(arr) {
    return arr.every(num => num > 0);
}

console.log(allPositiveNumbers([2, 4, 6, 8, 10]));// T
console.log(allPositiveNumbers([2, 4, 6, -8, 10]));// F
