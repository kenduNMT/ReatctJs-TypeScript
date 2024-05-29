"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function cacheDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = {};
    descriptor.value = function (...args) {
        const cacheKey = JSON.stringify(args);
        if (cacheKey in cache) {
            // Nếu kết quả đã được caching, trả về kết quả từ cache
            console.log('Fetching from cache');
            return cache[cacheKey];
        }
        else {
            // Nếu chưa có trong cache, gọi hàm gốc và lưu kết quả vào cache
            console.log('Calculating result...');
            const result = originalMethod.apply(this, args);
            cache[cacheKey] = result;
            return result;
        }
    };
    return descriptor;
}
class ExampleS {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    cacheDecorator
], ExampleS.prototype, "add", null);
// Sử dụng hàm đã được decorate
const exampleS = new ExampleS();
console.log(exampleS.add(2, 3));
console.log(exampleS.add(2, 3));
console.log(exampleS.add(4, 5));
console.log(exampleS.add(4, 5));
