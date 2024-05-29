function logDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // Log tên hàm
        console.log(`Hàm '${propertyKey}' được gọi`);

        // Log tham số đầu vào
        console.log(`Tham số đầu vào: ${JSON.stringify(args)}`);

        // Gọi hàm gốc và lấy kết quả
        const result = originalMethod.apply(this, args);

        // Log kết quả trả về
        console.log(`Hàm '${propertyKey}' trả về: ${JSON.stringify(result)}`);

        // Trả về kết quả của hàm gốc
        return result;
    };

    return descriptor;
}

class Example {
    @logDecorator
    add(a: number, b: number): number {
        return a + b;
    }

    @logDecorator
    greet(name: string, greeting: string = "Xin chào"): string {
        return `${greeting}, ${name}!`;
    }
}

// Sử dụng các hàm đã được decorate
const example = new Example();
const addResult = example.add(3, 5);
const greetResult = example.greet("Alice");
