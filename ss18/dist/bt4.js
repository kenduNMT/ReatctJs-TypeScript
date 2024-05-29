"use strict";
function validateDecorator(validationFn) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (validationFn(args)) {
                return originalMethod.apply(this, args);
            }
            else {
                throw new Error("Validation failed: Invalid arguments");
            }
        };
        return descriptor;
    };
}
// Ví dụ hàm validation: kiểm tra các tham số có phải là số dương không
function validatePositiveNumbers(args) {
    return args.every(arg => typeof arg === 'number' && arg > 0);
}
// Sử dụng hàm decorator với hàm validatePositiveNumbers
const validatedAdd = validateDecorator(validatePositiveNumbers)(null, "validatedAdd", {
    value: (a, b) => {
        return a + b;
    },
}).value;
// Gọi hàm với các tham số hợp lệ
try {
    console.log(validatedAdd(2, 3));
}
catch (error) {
    console.error(error.message);
}
// Gọi hàm với các tham số không hợp lệ
try {
    console.log(validatedAdd(-1, 3));
}
catch (error) {
    console.error(error.message);
}
// Thêm ví dụ hàm không cần class
const validatedMultiply = validateDecorator(validatePositiveNumbers)(null, "validatedMultiply", {
    value: (a, b) => {
        return a * b;
    },
}).value;
// Gọi hàm với các tham số hợp lệ
try {
    console.log(validatedMultiply(4, 5));
}
catch (error) {
    console.error(error.message);
}
// Gọi hàm với các tham số không hợp lệ
try {
    console.log(validatedMultiply(4, -5));
}
catch (error) {
    console.error(error.message);
}
