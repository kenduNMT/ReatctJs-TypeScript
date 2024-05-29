"use strict";
// Hàm generic để in giá trị của biến
function printValue(variableName, value) {
    console.log(`${variableName}:`, value);
}
// Khai báo các biến
let undefinedVariable;
let numberVariable = 42;
let inferredVariable = "Hello, TypeScript!";
// Sử dụng hàm generic để in các biến
printValue("undefinedVariable", undefinedVariable);
printValue("numberVariable", numberVariable);
printValue("inferredVariable", inferredVariable);
