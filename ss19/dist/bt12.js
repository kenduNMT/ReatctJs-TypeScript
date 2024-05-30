"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function throttle(limit, interval) {
    let lastCallTime = 0;
    let inCooldown = false;
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastCallTime;
            if (!inCooldown || elapsedTime >= interval) {
                inCooldown = false;
                lastCallTime = currentTime;
                originalMethod.apply(this, args);
            }
            else {
                console.log(`API call throttled. Waiting for next available time slot.`);
            }
            if (!inCooldown) {
                inCooldown = true;
                setTimeout(() => {
                    inCooldown = false;
                }, interval);
            }
        };
        return descriptor;
    };
}
// Sử dụng decorator
class APIManager {
    static callAPI() {
        console.log("API called.");
    }
}
__decorate([
    throttle(3, 10000) // Giới hạn 3 lần gọi trong 10 giây
], APIManager, "callAPI", null);
// Kiểm tra kết quả
for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log(`Request ${i}:`);
        APIManager.callAPI();
    }, i * 2000); // Gọi hàm mỗi 2 giây
}
