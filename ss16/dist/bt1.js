"use strict";
function identity(arg) {
    return arg;
}
// Sử dụng với kiểu number
let numberResult = identity(42);
console.log(numberResult); // Output: 42
// Sử dụng với kiểu string
let stringResult = identity("Hello, TypeScript!");
console.log(stringResult); // Output: "Hello, TypeScript!"
// Sử dụng với kiểu boolean
let booleanResult = identity(true);
console.log(booleanResult); // Output: true
// Sử dụng với kiểu object
let objectResult = identity({ name: "Alice", age: 30 });
console.log(objectResult); // Output: { name: 'Alice', age: 30 }
// Sử dụng với kiểu array
let arrayResult = identity([1, 2, 3, 4, 5]);
console.log(arrayResult); // Output: [1, 2, 3, 4, 5]
