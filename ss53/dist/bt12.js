"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Hàm generatePrimes nhận vào một số nguyên dương n và trả về một Promise với mảng các số nguyên tố từ 2 đến n.
 * @param n - Một số nguyên dương để xác định khoảng tìm số nguyên tố.
 * @returns - Một Promise trả về mảng các số nguyên tố từ 2 đến n.
 */
function generatePrimes(n) {
    return new Promise((resolve, reject) => {
        // Kiểm tra nếu n không phải là số nguyên dương
        if (!Number.isInteger(n) || n <= 1) {
            reject(new Error("Tham số phải là một số nguyên dương lớn hơn 1."));
            return;
        }
        // Mảng để lưu các số nguyên tố
        const primes = [];
        // Hàm kiểm tra một số có phải là số nguyên tố không
        function isPrime(num) {
            if (num <= 1)
                return false;
            if (num === 2)
                return true; // 2 là số nguyên tố
            if (num % 2 === 0)
                return false; // Số chẵn lớn hơn 2 không phải là số nguyên tố
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0)
                    return false;
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const n = 20; // Bạn có thể thay đổi giá trị của n để kiểm tra với các số khác nhau
            const primeNumbers = yield generatePrimes(n);
            console.log(`Các số nguyên tố từ 2 đến ${n}:`, primeNumbers);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi:", error.message);
            }
            else {
                console.error("Lỗi không xác định:", error);
            }
        }
    });
}
// Gọi hàm main để thực thi chương trình
main();
