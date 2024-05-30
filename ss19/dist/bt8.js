"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function UppercaseInput(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const modifiedArgs = args.map(arg => {
            if (typeof arg === 'string') {
                return arg.toUpperCase();
            }
            return arg;
        });
        return originalMethod.apply(this, modifiedArgs);
    };
}
function ReverseOutput(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.split('').reverse().join('');
        }
        return result;
    };
}
function AddPrefix(prefix) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const result = originalMethod.apply(this, args);
            if (typeof result === 'string') {
                return `${prefix}${result}`;
            }
            return result;
        };
    };
}
function compositions(...decorators) {
    return function (target, propertyKey, descriptor) {
        for (const decorator of decorators) {
            decorator(target, propertyKey, descriptor);
        }
    };
}
// Sử dụng các decorator
class Examples {
    process(input) {
        return input;
    }
}
__decorate([
    compositions(UppercaseInput, ReverseOutput, AddPrefix('Prefix: '))
], Examples.prototype, "process", null);
// Kiểm tra kết quả
const examples = new Examples();
console.log(examples.process("hello world")); // Kết quả: "Prefix: DLROW OLLEH"
