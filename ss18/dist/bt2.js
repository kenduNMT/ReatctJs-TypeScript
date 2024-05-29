"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function timingDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const start = performance.now(); // Bắt đầu đo thời gian
        // Log tên hàm
        console.log(`Hàm '${propertyKey}' được gọi`);
        // Log tham số đầu vào
        console.log(`Tham số đầu vào: ${JSON.stringify(args)}`);
        // Gọi hàm gốc và lấy kết quả
        const result = originalMethod.apply(this, args);
        const end = performance.now(); // Kết thúc đo thời gian
        const executionTime = end - start; // Tính toán thời gian thực thi
        // Log thời gian thực thi
        console.log(`Thời gian thực thi của hàm '${propertyKey}': ${executionTime.toFixed(2)} ms`);
        // Log kết quả trả về
        console.log(`Hàm '${propertyKey}' trả về: ${JSON.stringify(result)}`);
        // Trả về kết quả của hàm gốc
        return result;
    };
    return descriptor;
}
class Examples {
    add(a, b) {
        return a + b;
    }
    greet(name, greeting = "Xin chào") {
        return `${greeting}, ${name}!`;
    }
}
__decorate([
    timingDecorator
], Examples.prototype, "add", null);
__decorate([
    timingDecorator
], Examples.prototype, "greet", null);
// Sử dụng các hàm đã được decorate
const examples = new Examples();
const addResults = examples.add(3, 5);
const greetResults = examples.greet("Alice");
