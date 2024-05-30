// Khai báo hàm decorator
function UppercaseDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    // Thay đổi phương thức gốc
    descriptor.value = function (...args: any[]) {
        // Gọi hàm gốc và lưu kết quả trả về
        const result = originalMethod.apply(this, args);
        // Kiểm tra nếu kết quả là chuỗi thì chuyển thành chữ viết hoa
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };

    return descriptor;
}

// Ví dụ sử dụng decorator
class Greeter {
    @UppercaseDecorator
    sayHello(name: string): string {
        return `Hello, ${name}!`;
    }
}

// Tạo instance và gọi phương thức đã được áp dụng decorator
const greeter = new Greeter();
console.log(greeter.sayHello("world")); // Kết quả: "HELLO, WORLD!"
