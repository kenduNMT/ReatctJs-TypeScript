"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function TheoDoiPass(sokytumin, sokytumax) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length < sokytumin || newVal.length > sokytumax) {
                throw new Error(`Password must be between ${sokytumin} and ${sokytumax} characters long`);
            }
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
__decorate([
    TheoDoiPass(8, 20)
], User.prototype, "password", void 0);
try {
    const user = new User('user1', 'password123');
    console.log('User created:', user);
    user.password = 'short';
}
catch (error) {
    console.error(error.message);
}
try {
    const user = new User('user2', 'toolongpasswordtoolongpassword');
}
catch (error) {
    console.error(error.message);
}
