"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm middleware decorator để áp dụng nhiều middlewares vào một hàm target
function applyMiddlewares(...middlewares) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let modifiedArgs = args;
            // Thực thi tất cả các middleware trước khi gọi hàm gốc
            for (const middleware of middlewares) {
                // Kiểm tra xem kết quả trả về từ middleware có phải là một mảng không
                modifiedArgs = Array.isArray(modifiedArgs) ? middleware(...modifiedArgs) : middleware(modifiedArgs);
            }
            // Gọi hàm gốc với các tham số đã được sửa đổi
            let result = originalMethod.apply(this, modifiedArgs);
            // Thực thi tất cả các middleware sau khi gọi hàm gốc
            for (const middleware of middlewares.reverse()) {
                // Kiểm tra xem kết quả trả về từ middleware có phải là một mảng không
                result = Array.isArray(result) ? middleware(...result) : middleware(result);
            }
            return result;
        };
        return descriptor;
    };
}
// Ví dụ về các hàm middleware
function logger(...args) {
    console.log('Logger middleware:', ...args);
    return args;
}
function doubleArguments(...args) {
    return args.map(arg => (typeof arg === 'number' ? arg * 2 : arg));
}
function addSuffix(result) {
    return typeof result === 'string' ? `${result} - Processed` : result;
}
// Class sử dụng hàm middleware decorator
class ExamPle {
    process(input) {
        return `Result: ${input}`;
    }
}
__decorate([
    applyMiddlewares(logger, doubleArguments, addSuffix)
], ExamPle.prototype, "process", null);
// Sử dụng hàm đã được decorate
const examPle = new ExamPle();
console.log(examPle.process(5));
