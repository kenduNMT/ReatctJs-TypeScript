"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Giả định có một user hiện tại (thường sẽ lấy từ context hoặc request trong ứng dụng thực tế)
const currentUser = {
    isAuthenticated: true,
    roles: ['admin', 'user']
};
function AuthDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (!currentUser.isAuthenticated) {
            throw new Error("User is not authenticated");
        }
        return originalMethod.apply(this, args);
    };
}
function RoleDecorator(requiredRoles) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const hasRequiredRole = requiredRoles.some(role => currentUser.roles.indexOf(role) !== -1);
            if (!hasRequiredRole) {
                throw new Error(`User does not have the required roles: ${requiredRoles.join(', ')}`);
            }
            return originalMethod.apply(this, args);
        };
    };
}
function composition(...decorators) {
    return function (target, propertyKey, descriptor) {
        for (const decorator of decorators) {
            decorator(target, propertyKey, descriptor);
        }
    };
}
// Sử dụng các decorator
class SecureService {
    secureMethod() {
        return "This is a secure method";
    }
    userMethod() {
        return "This method is for users";
    }
}
__decorate([
    composition(AuthDecorator, RoleDecorator(['admin']))
], SecureService.prototype, "secureMethod", null);
__decorate([
    composition(AuthDecorator, RoleDecorator(['user']))
], SecureService.prototype, "userMethod", null);
// Kiểm tra kết quả
const service = new SecureService();
try {
    console.log(service.secureMethod()); // Kết quả: "This is a secure method"
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("Unknown error:", error);
    }
}
try {
    console.log(service.userMethod()); // Kết quả: "This method is for users"
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("Unknown error:", error);
    }
}
