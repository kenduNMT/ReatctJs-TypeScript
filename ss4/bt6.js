const checkEndString = (longString, shortString) => {
    return longString.endsWith(shortString);
};

console.log(checkEndString("Hello world", "world")); // Output: true
console.log(checkEndString("Hello world", "Hello")); // Output: false
