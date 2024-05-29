"use strict";
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string' && !isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
        return (parseFloat(num1) + parseFloat(num2));
    }
    else {
        throw new Error("Invalid input. Both parameters must be either numbers or parsable strings.");
    }
}
function subtract(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string' && !isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
        return (parseFloat(num1) - parseFloat(num2));
    }
    else {
        throw new Error("Invalid input. Both parameters must be either numbers or parsable strings.");
    }
}
function multiply(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 * num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string' && !isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
        return (parseFloat(num1) * parseFloat(num2));
    }
    else {
        throw new Error("Invalid input. Both parameters must be either numbers or parsable strings.");
    }
}
function divide(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string' && !isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
        if (parseFloat(num2) === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return (parseFloat(num1) / parseFloat(num2));
    }
    else {
        throw new Error("Invalid input. Both parameters must be either numbers or parsable strings.");
    }
}
// Thử nghiệm các hàm với các kiểu dữ liệu khác nhau
console.log("Addition:", add(5, 3)); // Số
console.log("Subtraction:", subtract(8, 3)); // Số
console.log("Multiplication:", multiply(4, 3)); // Số
console.log("Division:", divide(15, 3)); // Số
console.log("Addition:", add("5", "3")); // Chuỗi có thể chuyển đổi thành số
console.log("Subtraction:", subtract("8", "3")); // Chuỗi có thể chuyển đổi thành số
console.log("Multiplication:", multiply("4", "3")); // Chuỗi có thể chuyển đổi thành số
console.log("Division:", divide("15", "3")); // Chuỗi có thể chuyển đổi thành số
try {
    console.log("Addition:", add("abc", "def")); // Chuỗi không thể chuyển đổi thành số
}
catch (error) {
    if (typeof error === 'string') {
        console.error(error);
    }
    else if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
try {
    console.log("Subtraction:", subtract("xyz", "uvw")); // Chuỗi không thể chuyển đổi thành số
}
catch (error) {
    if (typeof error === 'string') {
        console.error(error);
    }
    else if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
try {
    console.log("Multiplication:", multiply("ghi", "jkl")); // Chuỗi không thể chuyển đổi thành số
}
catch (error) {
    if (typeof error === 'string') {
        console.error(error);
    }
    else if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
try {
    console.log("Division:", divide("xyz", "0")); // Chuỗi không thể chuyển đổi thành số hoặc chia cho 0
}
catch (error) {
    if (typeof error === 'string') {
        console.error(error);
    }
    else if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
