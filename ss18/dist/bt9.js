"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function throttleDecorator(interval) {
    let lastExecutionTime = 0;
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecutionTime >= interval) {
                lastExecutionTime = currentTime;
                return originalMethod.apply(this, args);
            }
            else {
                console.log(`Function ${propertyKey} is throttled. Wait for the next interval.`);
            }
        };
        return descriptor;
    };
}
// Sử dụng hàm decorator "throttleDecorator"
class ExAmple {
    logMessage(message) {
        console.log(message);
    }
}
__decorate([
    throttleDecorator(1000) // Throttle mỗi 1 giây (1000 milliseconds)
], ExAmple.prototype, "logMessage", null);
// Sử dụng hàm đã được decorate
const exAmple = new ExAmple();
exAmple.logMessage("First message"); // Thực thi ngay
exAmple.logMessage("Second message"); // Bị throttle
setTimeout(() => {
    exAmple.logMessage("Third message"); // Thực thi sau khi đã qua 1 giây
}, 1100);
