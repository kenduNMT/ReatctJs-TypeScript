function logDecorator() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log(`Calling function: ${propertyKey}`);
            console.log(`Arguments: ${args}`);
            const result = originalMethod.apply(this, args);
            console.log(`Result: ${result}`);
            return result;
        };

        return descriptor;
    };
}

// Sử dụng decorator @logDecorator để ghi log thông tin của hàm
class Example {
    @logDecorator()
    calculateSum(a: number, b: number): number {
        return a + b;
    }
}

const example = new Example();

// Gọi hàm calculateSum với các tham số
const result = example.calculateSum(2, 3);
console.log(`Result of calculateSum: ${result}`);
