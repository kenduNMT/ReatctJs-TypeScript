"use strict";
let myTuple = [42, "Hello, world!", true];
// Sử dụng toán tử spread để lấy 3 giá trị từ tuple
let [numValue, strValue, boolValue] = myTuple;
// In ra các giá trị để kiểm tra
console.log(numValue); // In ra: 42
console.log(strValue); // In ra: Hello, world!
console.log(boolValue); // In ra: true
