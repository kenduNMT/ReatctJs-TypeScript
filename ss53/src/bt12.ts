/**
 * Hàm generatePrimes nhận vào một số nguyên dương n và trả về một Promise với mảng các số nguyên tố từ 2 đến n.
 * @param n - Một số nguyên dương để xác định khoảng tìm số nguyên tố.
 * @returns - Một Promise trả về mảng các số nguyên tố từ 2 đến n.
 */
function generatePrimes(n: number): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
        // Kiểm tra nếu n không phải là số nguyên dương
        if (!Number.isInteger(n) || n <= 1) {
            reject(new Error("Tham số phải là một số nguyên dương lớn hơn 1."));
            return;
        }

        // Mảng để lưu các số nguyên tố
        const primes: number[] = [];

        // Hàm kiểm tra một số có phải là số nguyên tố không
        function isPrime(num: number): boolean {
            if (num <= 1) return false;
            if (num === 2) return true; // 2 là số nguyên tố
            if (num % 2 === 0) return false; // Số chẵn lớn hơn 2 không phải là số nguyên tố
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) return false;
            }
            return true;
        }

        // Vòng lặp kiểm tra từng số từ 2 đến n
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }

        // Giải quyết Promise với mảng các số nguyên tố
        resolve(primes);
    });
}

// Hàm main để sử dụng generatePrimes() và hiển thị danh sách số nguyên tố ra console
async function main() {
    try {
        const n = 20; // Bạn có thể thay đổi giá trị của n để kiểm tra với các số khác nhau
        const primeNumbers = await generatePrimes(n);
        console.log(`Các số nguyên tố từ 2 đến ${n}:`, primeNumbers);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi:", error.message);
        } else {
            console.error("Lỗi không xác định:", error);
        }
    }
}

// Gọi hàm main để thực thi chương trình
main();
