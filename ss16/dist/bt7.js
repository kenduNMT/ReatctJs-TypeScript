"use strict";
function performOperations(num1, num2) {
    const addition = (num1, num2) => num1 + num2;
    const subtraction = (num1, num2) => num1 - num2;
    const multiplication = (num1, num2) => num1 * num2;
    const division = (num1, num2) => num1 / num2;
    const resultAddition = addition(num1, num2);
    const resultSubtraction = subtraction(num1, num2);
    const resultMultiplication = multiplication(num1, num2);
    const resultDivision = division(num1, num2);
    console.log("Addition:", resultAddition);
    console.log("Subtraction:", resultSubtraction);
    console.log("Multiplication:", resultMultiplication);
    console.log("Division:", resultDivision);
    return resultDivision;
}
// Khai báo biến num1, num2 và num3 với kiểu dữ liệu number
let num1 = 10;
let num2 = 5;
let num3;
// Thực hiện phép tính với kiểu dữ liệu number
num3 = performOperations(num1, num2);
// In kết quả của phép tính
console.log("Result:", num3);
// Thay đổi kiểu dữ liệu của biến num1 thành string và num2 thành boolean
// num1 = "10"; // Thêm comment để tránh lỗi
// num2 = true; // Thêm comment để tránh lỗi
// Thực hiện lại phép tính với kiểu dữ liệu đã thay đổi
// num3 = performOperations<string, boolean, number>(num1, num2); // Thêm comment để tránh lỗi
// In kết quả của phép tính
// console.log("Result:", num3); // Thêm comment để tránh lỗi
