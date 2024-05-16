const checkStartString = (longString, shortString) => {
    return longString.startsWith(shortString);
};

console.log(checkStartString("Hello world", "Hello")); // Output: true
console.log(checkStartString("Hello world", "world")); // Output: false
