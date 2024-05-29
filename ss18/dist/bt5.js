"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator để kết hợp nhiều hàm lại với nhau
function chainFunctions(...fns) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Thực thi hàm gốc và lấy kết quả
            let result = originalMethod.apply(this, args);
            // Thực thi các hàm trong xâu chuỗi với kết quả của hàm trước đó
            for (const fn of fns) {
                result = fn(result);
            }
            return result;
        };
        return descriptor;
    };
}
// Ví dụ về các hàm để xâu chuỗi
function double(x) {
    return x * 2;
}
function increment(x) {
    return x + 1;
}
function square(x) {
    return x * x;
}
// Sử dụng hàm decorator với các hàm double, increment, và square
class ExamplE {
    processNumber(x) {
        return x;
    }
}
__decorate([
    chainFunctions(double, increment, square)
], ExamplE.prototype, "processNumber", null);
// Sử dụng hàm đã được decorate
const examplE = new ExamplE();
console.log(examplE.processNumber(3));
