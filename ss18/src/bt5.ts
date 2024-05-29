// Hàm decorator để kết hợp nhiều hàm lại với nhau
function chainFunctions(...fns: Function[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            // Thực thi hàm gốc và lấy kết quả
            let result = originalMethod.apply(this, args);

            // Thực thi các hàm trong xâu chuỗi với kết quả của hàm trước đó
            for (const fn of fns) {
                result = fn(result);
            }

            return result;
        };

        return descriptor;
    };
}

// Ví dụ về các hàm để xâu chuỗi
function double(x: number): number {
    return x * 2;
}

function increment(x: number): number {
    return x + 1;
}

function square(x: number): number {
    return x * x;
}

// Sử dụng hàm decorator với các hàm double, increment, và square
class ExamplE {
    @chainFunctions(double, increment, square)
    processNumber(x: number): number {
        return x;
    }
}

// Sử dụng hàm đã được decorate
const examplE = new ExamplE();
console.log(examplE.processNumber(3));
