"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateDecorator(validationFn) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (validationFn(args)) {
                return originalMethod.apply(this, args);
            }
            else {
                throw new Error("Validation failed: Invalid arguments");
            }
        };
        return descriptor;
    };
}
// Ví dụ hàm validation: kiểm tra các tham số có phải là số dương không
function validatePositiveNumbers(args) {
    return args.every(arg => typeof arg === 'number' && arg > 0);
}
// Sử dụng decorator @validateDecorator với hàm validatePositiveNumbers
class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
__decorate([
    validateDecorator(validatePositiveNumbers)
], Calculator.prototype, "add", null);
__decorate([
    validateDecorator(validatePositiveNumbers)
], Calculator.prototype, "multiply", null);
const calculator = new Calculator();
// Gọi hàm với các tham số hợp lệ
try {
    console.log(calculator.add(2, 3));
}
catch (error) {
    console.error(error.message);
}
// Gọi hàm với các tham số không hợp lệ
try {
    console.log(calculator.add(-1, 3));
}
catch (error) {
    console.error(error.message);
}
// Gọi hàm với các tham số hợp lệ
try {
    console.log(calculator.multiply(4, 5));
}
catch (error) {
    console.error(error.message);
}
// Gọi hàm với các tham số không hợp lệ
try {
    console.log(calculator.multiply(4, -5));
}
catch (error) {
    console.error(error.message);
}
    
