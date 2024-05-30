type MethodDecorators = (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => void;

function UppercaseInput(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const modifiedArgs = args.map(arg => {
            if (typeof arg === 'string') {
                return arg.toUpperCase();
            }
            return arg;
        });
        return originalMethod.apply(this, modifiedArgs);
    };
}

function ReverseOutput(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.split('').reverse().join('');
        }
        return result;
    };
}

function AddPrefix(prefix: string): MethodDecorator {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            if (typeof result === 'string') {
                return `${prefix}${result}`;
            }
            return result;
        };
    };
}

function compositions(...decorators: MethodDecorator[]): MethodDecorator {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void {
        for (const decorator of decorators) {
            decorator(target, propertyKey, descriptor);
        }
    };
}

// Sử dụng các decorator
class Examples {
    @compositions(
        UppercaseInput,
        ReverseOutput,
        AddPrefix('Prefix: ')
    )
    process(input: string): string {
        return input;
    }
}

// Kiểm tra kết quả
const examples = new Examples();
console.log(examples.process("hello world")); // Kết quả: "Prefix: DLROW OLLEH"
