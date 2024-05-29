"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator để kiểm tra kiểu dữ liệu của các tham số
function validateTypes(...types) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Kiểm tra kiểu dữ liệu của các tham số
            for (let i = 0; i < args.length; i++) {
                if (typeof args[i] !== types[i]) {
                    throw new Error(`Argument type mismatch at index ${i}: expected ${types[i]}, got ${typeof args[i]}`);
                }
            }
            // Gọi hàm gốc nếu tất cả các tham số đều đúng kiểu dữ liệu
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Sử dụng hàm decorator với các tham số kiểu dữ liệu
class ExampLe {
    add(a, b) {
        return a + b;
    }
    concatenate(a, b) {
        return a + b;
    }
}
__decorate([
    validateTypes('number', 'number')
], ExampLe.prototype, "add", null);
__decorate([
    validateTypes('string', 'string')
], ExampLe.prototype, "concatenate", null);
// Sử dụng hàm đã được decorate
const exampLe = new ExampLe();
// Gọi hàm với các tham số hợp lệ
try {
    console.log(exampLe.add(2, 3)); // Output: 5
}
catch (error) {
    console.error(error.message);
}
try {
    console.log(exampLe.concatenate("Hello, ", "world!")); // Output: "Hello, world!"
}
catch (error) {
    console.error(error.message);
}
// Gọi hàm với các tham số không hợp lệ
try {
    // console.log(exampLe.add(2, "3")); // Output: Error: Argument type mismatch at index 1: expected number, got string
}
catch (error) {
    console.error(error.message);
}
try {
    // console.log(exampLe.concatenate("Hello, ", 123)); // Output: Error: Argument type mismatch at index 1: expected string, got number
}
catch (error) {
    console.error(error.message);
}
