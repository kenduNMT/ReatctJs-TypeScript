"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator caching
function caching(cacheCondition) {
    const cache = new Map(); // Sử dụng Map để lưu cache
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const cacheKey = `${propertyKey}_${args.join('_')}`; // Tạo key cho cache dựa trên tên phương thức và tham số
            // Kiểm tra xem kết quả đã được cached hay chưa và cacheCondition
            if (cache.has(cacheKey) && cacheCondition(args)) {
                console.log(`Cache hit for ${cacheKey}`);
                return cache.get(cacheKey);
            }
            else {
                console.log(`Cache miss for ${cacheKey}`);
                const result = originalMethod.apply(this, args);
                cache.set(cacheKey, result);
                return result;
            }
        };
        return descriptor;
    };
}
// Ví dụ về hàm caching condition: caching kết quả nếu tất cả các tham số là số dương
function positiveNumberCacheCondition(args) {
    return args.every(arg => typeof arg === 'number' && arg > 0);
}
// Class sử dụng hàm caching decorator
class ExaMple {
    add(a, b) {
        console.log('Function add called');
        return a + b;
    }
}
__decorate([
    caching(positiveNumberCacheCondition)
], ExaMple.prototype, "add", null);
// Sử dụng hàm đã được decorate
const exaMple = new ExaMple();
console.log(exaMple.add(2, 3));
console.log(exaMple.add(2, 3));
console.log(exaMple.add(-1, 3));
console.log(exaMple.add(-1, 3));
