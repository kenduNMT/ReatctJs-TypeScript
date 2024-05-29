// Hàm decorator caching
function caching(cacheCondition: (args: any[]) => boolean) {
    const cache = new Map<string, any>(); // Sử dụng Map để lưu cache

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const cacheKey = `${propertyKey}_${args.join('_')}`; // Tạo key cho cache dựa trên tên phương thức và tham số

            // Kiểm tra xem kết quả đã được cached hay chưa và cacheCondition
            if (cache.has(cacheKey) && cacheCondition(args)) {
                console.log(`Cache hit for ${cacheKey}`);
                return cache.get(cacheKey);
            } else {
                console.log(`Cache miss for ${cacheKey}`);
                const result = originalMethod.apply(this, args);
                cache.set(cacheKey, result);
                return result;
            }
        };

        return descriptor;
    };
}

// Ví dụ về hàm caching condition: caching kết quả nếu tất cả các tham số là số dương
function positiveNumberCacheCondition(args: any[]): boolean {
    return args.every(arg => typeof arg === 'number' && arg > 0);
}

// Class sử dụng hàm caching decorator
class ExaMple {
    @caching(positiveNumberCacheCondition)
    add(a: number, b: number): number {
        console.log('Function add called');
        return a + b;
    }
}

// Sử dụng hàm đã được decorate
const exaMple = new ExaMple();
console.log(exaMple.add(2, 3)); 
console.log(exaMple.add(2, 3)); 
console.log(exaMple.add(-1, 3)); 
console.log(exaMple.add(-1, 3)); 
