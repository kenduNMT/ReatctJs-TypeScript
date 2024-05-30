"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logDecorator() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Calling function: ${propertyKey}`);
            console.log(`Arguments: ${args}`);
            const result = originalMethod.apply(this, args);
            console.log(`Result: ${result}`);
            return result;
        };
        return descriptor;
    };
}
// Sử dụng decorator @logDecorator để ghi log thông tin của hàm
class Example {
    calculateSum(a, b) {
        return a + b;
    }
}
__decorate([
    logDecorator()
], Example.prototype, "calculateSum", null);
const example = new Example();
// Gọi hàm calculateSum với các tham số
const result = example.calculateSum(2, 3);
console.log(`Result of calculateSum: ${result}`);
