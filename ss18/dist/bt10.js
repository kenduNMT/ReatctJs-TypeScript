"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator kiểm tra kiểu dữ liệu của tham số và chuyển đổi thành số nếu có thể
function validateParams(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (a, b) {
        // Chuyển đổi các tham số thành số nếu chúng có thể chuyển đổi thành số
        const numA = convertToNumber(a);
        const numB = convertToNumber(b);
        // Kiểm tra kiểu dữ liệu của tham số sau khi chuyển đổi
        if (isNaN(numA)) {
            console.error(`${a} is not a valid number.`);
            return;
        }
        if (isNaN(numB)) {
            console.error(`${b} is not a valid number.`);
            return;
        }
        // Gọi hàm gốc với tham số đã kiểm tra và chuyển đổi
        return originalMethod.call(this, numA, numB);
    };
    return descriptor;
}
// Hàm chuyển đổi tham số thành số
function convertToNumber(value) {
    return typeof value === 'string' ? parseFloat(value) : value;
}
class MathOperations {
    // Hàm decorator kiểm tra kiểu dữ liệu của tham số và chuyển đổi thành số nếu có thể
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            console.error("Division by zero is not allowed.");
            return;
        }
        return a / b;
    }
}
__decorate([
    validateParams
], MathOperations, "add", null);
__decorate([
    validateParams
], MathOperations, "subtract", null);
__decorate([
    validateParams
], MathOperations, "multiply", null);
__decorate([
    validateParams
], MathOperations, "divide", null);
// Sử dụng các phương thức của class MathOperations
console.log(MathOperations.add(5, 3)); // Output: 8
console.log(MathOperations.add("5", "3")); // Output: 8 (chuyển đổi thành số)
console.log(MathOperations.add("5", "abc")); // Output: "abc is not a valid number."
console.log(MathOperations.subtract(10, 4)); // Output: 6
console.log(MathOperations.subtract("10", "4")); // Output: 6 (chuyển đổi thành số)
console.log(MathOperations.multiply(2, 3)); // Output: 6
console.log(MathOperations.multiply("2", "3")); // Output: 6 (chuyển đổi thành số)
console.log(MathOperations.divide(10, 2)); // Output: 5
console.log(MathOperations.divide("10", "2")); // Output: 5 (chuyển đổi thành số)
console.log(MathOperations.divide(10, 0)); // Output: "Division by zero is not allowed."
