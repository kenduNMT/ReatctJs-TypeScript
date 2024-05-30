"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Khai báo hàm decorator
function UppercaseDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    // Thay đổi phương thức gốc
    descriptor.value = function (...args) {
        // Gọi hàm gốc và lưu kết quả trả về
        const result = originalMethod.apply(this, args);
        // Kiểm tra nếu kết quả là chuỗi thì chuyển thành chữ viết hoa
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
// Ví dụ sử dụng decorator
class Greeter {
    sayHello(name) {
        return `Hello, ${name}!`;
    }
}
__decorate([
    UppercaseDecorator
], Greeter.prototype, "sayHello", null);
// Tạo instance và gọi phương thức đã được áp dụng decorator
const greeter = new Greeter();
console.log(greeter.sayHello("world")); // Kết quả: "HELLO, WORLD!"
