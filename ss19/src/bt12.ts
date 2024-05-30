function throttle(limit: number, interval: number) {
    let lastCallTime = 0;
    let inCooldown = false;

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastCallTime;

            if (!inCooldown || elapsedTime >= interval) {
                inCooldown = false;
                lastCallTime = currentTime;
                originalMethod.apply(this, args);
            } else {
                console.log(`API call throttled. Waiting for next available time slot.`);
            }

            if (!inCooldown) {
                inCooldown = true;
                setTimeout(() => {
                    inCooldown = false;
                }, interval);
            }
        };

        return descriptor;
    };
}

// Sử dụng decorator

class APIManager {
    @throttle(3, 10000) // Giới hạn 3 lần gọi trong 10 giây
    static callAPI() {
        console.log("API called.");
    }
}

// Kiểm tra kết quả
for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log(`Request ${i}:`);
        APIManager.callAPI();
    }, i * 2000); // Gọi hàm mỗi 2 giây
}
