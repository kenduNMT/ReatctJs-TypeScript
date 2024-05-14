function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
function hasPrimeNumber(arr) {
    return arr.every(isPrime);
}

console.log(hasPrimeNumber([4, 6, 8, 9, 10]));// F
console.log(hasPrimeNumber([2, 3, 5, 7, 11]));// T
