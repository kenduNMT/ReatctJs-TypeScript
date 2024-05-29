function cacheDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache: { [key: string]: any } = {};

    descriptor.value = function (...args: any[]) {
        const cacheKey = JSON.stringify(args);
        if (cacheKey in cache) {
            // Nếu kết quả đã được caching, trả về kết quả từ cache
            console.log('Fetching from cache');
            return cache[cacheKey];
        } else {
            // Nếu chưa có trong cache, gọi hàm gốc và lưu kết quả vào cache
            console.log('Calculating result...');
            const result = originalMethod.apply(this, args);
            cache[cacheKey] = result;
            return result;
        }
    };

    return descriptor;
}

class ExampleS {
    @cacheDecorator
    add(a: number, b: number): number {
        return a + b;
    }
}

// Sử dụng hàm đã được decorate
const exampleS = new ExampleS();
console.log(exampleS.add(2, 3)); 
console.log(exampleS.add(2, 3)); 
console.log(exampleS.add(4, 5)); 
console.log(exampleS.add(4, 5)); 
