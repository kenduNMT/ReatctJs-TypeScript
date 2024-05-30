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

// Áp dụng decorator @validateDecorator với hàm validatePositiveNumbers
class Calculator {
    @validateDecorator(validatePositiveNumbers)
    add(a: number, b: number): number {
        return a + b;
    }

    @validateDecorator(validatePositiveNumbers)
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const calculator = new Calculator();

// Gọi hàm với các tham số hợp lệ
try {
    console.log(calculator.add(2, 3)); 
} catch (error) {
    console.error((error as Error).message);
}

// Gọi hàm với các tham số không hợp lệ
try {
    console.log(calculator.add(-1, 3)); 
} catch (error) {
    console.error((error as Error).message);
}

// Gọi hàm với các tham số hợp lệ
try {
    console.log(calculator.multiply(4, 5)); 
} catch (error) {
    console.error((error as Error).message);
}

// Gọi hàm với các tham số không hợp lệ
try {
    console.log(calculator.multiply(4, -5)); 
} catch (error) {
    console.error((error as Error).message);
}
