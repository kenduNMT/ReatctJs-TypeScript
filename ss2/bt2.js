function hasUppercase(str) {
    return /[A-Z]/.test(str);
}

console.log(hasUppercase("Hello"));// T
console.log(hasUppercase("hello"));// F
