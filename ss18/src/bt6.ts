// Hàm decorator để kiểm tra kiểu dữ liệu của các tham số
function validateTypes(...types: any[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            // Kiểm tra kiểu dữ liệu của các tham số
            for (let i = 0; i < args.length; i++) {
                if (typeof args[i] !== types[i]) {
                    throw new Error(`Argument type mismatch at index ${i}: expected ${types[i]}, got ${typeof args[i]}`);
                }
            }

            // Gọi hàm gốc nếu tất cả các tham số đều đúng kiểu dữ liệu
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

// Sử dụng hàm decorator với các tham số kiểu dữ liệu
class ExampLe {
    @validateTypes('number', 'number')
    add(a: number, b: number): number {
        return a + b;
    }

    @validateTypes('string', 'string')
    concatenate(a: string, b: string): string {
        return a + b;
    }
}

// Sử dụng hàm đã được decorate
const exampLe = new ExampLe();

// Gọi hàm với các tham số hợp lệ
try {
    console.log(exampLe.add(2, 3)); // Output: 5
} catch (error) {
    console.error((error as Error).message);
}

try {
    console.log(exampLe.concatenate("Hello, ", "world!")); // Output: "Hello, world!"
} catch (error) {
    console.error((error as Error).message);
}

// Gọi hàm với các tham số không hợp lệ
try {
    // console.log(exampLe.add(2, "3")); // Output: Error: Argument type mismatch at index 1: expected number, got string
} catch (error) {
    console.error((error as Error).message);
}

try {
    // console.log(exampLe.concatenate("Hello, ", 123)); // Output: Error: Argument type mismatch at index 1: expected string, got number
} catch (error) {
    console.error((error as Error).message);
}
