function validateDecorator(validationFn: (args: any[]) => boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (validationFn(args)) {
                return originalMethod.apply(this, args);
            } else {
                throw new Error("Validation failed: Invalid arguments");
            }
        };

        return descriptor;
    };
}

// Ví dụ hàm validation: kiểm tra các tham số có phải là số dương không
function validatePositiveNumbers(args: any[]): boolean {
    return args.every(arg => typeof arg === 'number' && arg > 0);
}

// Sử dụng hàm decorator với hàm validatePositiveNumbers
const validatedAdd = validateDecorator(validatePositiveNumbers)(null, "validatedAdd", {
    value: (a: number, b: number): number => {
        return a + b;
    },
} as PropertyDescriptor).value;

// Gọi hàm với các tham số hợp lệ
try {
    console.log(validatedAdd(2, 3)); 
} catch (error) {
    console.error((error as Error).message);
}

// Gọi hàm với các tham số không hợp lệ
try {
    console.log(validatedAdd(-1, 3)); 
} catch (error) {
    console.error((error as Error).message);
}

// Thêm ví dụ hàm không cần class
const validatedMultiply = validateDecorator(validatePositiveNumbers)(null, "validatedMultiply", {
    value: (a: number, b: number): number => {
        return a * b;
    },
} as PropertyDescriptor).value;

// Gọi hàm với các tham số hợp lệ
try {
    console.log(validatedMultiply(4, 5)); 
} catch (error) {
    console.error((error as Error).message);
}

// Gọi hàm với các tham số không hợp lệ
try {
    console.log(validatedMultiply(4, -5)); 
} catch (error) {
    console.error((error as Error).message);
}
