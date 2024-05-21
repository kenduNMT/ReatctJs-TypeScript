"use strict";
function checkStatus(status) {
    if (status === "success") {
        return true;
    }
    return false;
}
const result1 = checkStatus("success"); // true
const result2 = checkStatus("failure"); // false
const result3 = checkStatus("pending"); // false
const result4 = checkStatus("unknown"); // false (TypeScript không báo lỗi, nhưng kết quả là false)
console.log(result1); // In ra: true
console.log(result2); // In ra: false
console.log(result3); // In ra: false
console.log(result4); // In ra: false
