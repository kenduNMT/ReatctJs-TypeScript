// Hàm middleware decorator để áp dụng nhiều middlewares vào một hàm target
function applyMiddlewares(...middlewares: Function[]) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let modifiedArgs = args;

            // Thực thi tất cả các middleware trước khi gọi hàm gốc
            for (const middleware of middlewares) {
                // Kiểm tra xem kết quả trả về từ middleware có phải là một mảng không
                modifiedArgs = Array.isArray(modifiedArgs) ? middleware(...modifiedArgs) : middleware(modifiedArgs);
            }

            // Gọi hàm gốc với các tham số đã được sửa đổi
            let result = originalMethod.apply(this, modifiedArgs);

            // Thực thi tất cả các middleware sau khi gọi hàm gốc
            for (const middleware of middlewares.reverse()) {
                // Kiểm tra xem kết quả trả về từ middleware có phải là một mảng không
                result = Array.isArray(result) ? middleware(...result) : middleware(result);
            }

            return result;
        };

        return descriptor;
    };
}

// Ví dụ về các hàm middleware
function logger(...args: any[]) {
    console.log('Logger middleware:', ...args);
    return args;
}

function doubleArguments(...args: any[]) {
    return args.map(arg => (typeof arg === 'number' ? arg * 2 : arg));
}

function addSuffix(result: any) {
    return typeof result === 'string' ? `${result} - Processed` : result;
}

// Class sử dụng hàm middleware decorator
class ExamPle {
    @applyMiddlewares(logger, doubleArguments, addSuffix)
    process(input: number): string {
        return `Result: ${input}`;
    }
}

// Sử dụng hàm đã được decorate
const examPle = new ExamPle();
console.log(examPle.process(5)); 
