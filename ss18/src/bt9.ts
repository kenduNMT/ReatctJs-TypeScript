function throttleDecorator(interval: number) {
    let lastExecutionTime = 0;

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const currentTime = Date.now();
            if (currentTime - lastExecutionTime >= interval) {
                lastExecutionTime = currentTime;
                return originalMethod.apply(this, args);
            } else {
                console.log(`Function ${propertyKey} is throttled. Wait for the next interval.`);
            }
        };

        return descriptor;
    };
}

// Sử dụng hàm decorator "throttleDecorator"
class ExAmple {
    @throttleDecorator(1000) // Throttle mỗi 1 giây (1000 milliseconds)
    logMessage(message: string) {
        console.log(message);
    }
}

// Sử dụng hàm đã được decorate
const exAmple = new ExAmple();
exAmple.logMessage("First message"); // Thực thi ngay
exAmple.logMessage("Second message"); // Bị throttle
setTimeout(() => {
    exAmple.logMessage("Third message"); // Thực thi sau khi đã qua 1 giây
}, 1100);
