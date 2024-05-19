"use strict";
function convertToNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (!isNaN(Number(value))) {
        return Number(value);
    }
    return null;
}
function add(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 !== null && num2 !== null) {
        return num1 + num2;
    }
    return "Invalid input";
}
function subtract(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 !== null && num2 !== null) {
        return num1 - num2;
    }
    return "Invalid input";
}
function multiply(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 !== null && num2 !== null) {
        return num1 * num2;
    }
    return "Invalid input";
}
function divide(a, b) {
    const num1 = convertToNumber(a);
    const num2 = convertToNumber(b);
    if (num1 !== null && num2 !== null) {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    }
    return "Invalid input";
}
console.log("Add:", add("10", 5)); // 15
console.log("Subtract:", subtract("10", "5")); // 5
console.log("Multiply:", multiply(10, "5")); // 50
console.log("Divide:", divide("10", 2)); // 5
console.log("Divide by zero:", divide(10, 0)); // Cannot divide by zero
console.log("Invalid input:", add("abc", 5)); // Invalid input
console.log("Invalid input:", subtract(10, "xyz")); // Invalid input
