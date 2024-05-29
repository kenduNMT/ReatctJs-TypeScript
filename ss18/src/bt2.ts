function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now(); // Bắt đầu đo thời gian

        // Log tên hàm
        console.log(`Hàm '${propertyKey}' được gọi`);

        // Log tham số đầu vào
        console.log(`Tham số đầu vào: ${JSON.stringify(args)}`);

        // Gọi hàm gốc và lấy kết quả
        const result = originalMethod.apply(this, args);

        const end = performance.now(); // Kết thúc đo thời gian
        const executionTime = end - start; // Tính toán thời gian thực thi

        // Log thời gian thực thi
        console.log(`Thời gian thực thi của hàm '${propertyKey}': ${executionTime.toFixed(2)} ms`);

        // Log kết quả trả về
        console.log(`Hàm '${propertyKey}' trả về: ${JSON.stringify(result)}`);

        // Trả về kết quả của hàm gốc
        return result;
    };

    return descriptor;
}

class Examples {
    @timingDecorator
    add(a: number, b: number): number {
        return a + b;
    }

    @timingDecorator
    greet(name: string, greeting: string = "Xin chào"): string {
        return `${greeting}, ${name}!`;
    }
}

// Sử dụng các hàm đã được decorate
const examples = new Examples();
const addResults = examples.add(3, 5);
const greetResults = examples.greet("Alice");
