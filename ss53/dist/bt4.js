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
// Định nghĩa hàm sumWithPromise
function sumWithPromise(numbers) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers)) {
            reject(new Error("Tham số truyền vào phải là một mảng các số nguyên."));
        }
        const sum = numbers.reduce((acc, num) => {
            if (typeof num !== 'number' || isNaN(num)) {
                reject(new Error("Mảng phải chứa các số nguyên hợp lệ."));
            }
            return acc + num;
        }, 0);
        resolve(sum);
    });
}
// Định nghĩa hàm sumWithAsyncAwait
function sumWithAsyncAwait(numbers) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sum = yield sumWithPromise(numbers);
            return sum;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi:", error.message);
            }
            else {
                console.error("Lỗi không xác định:", error);
            }
            throw error;
        }
    });
}
// Gọi hàm và in kết quả ra màn hình console
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield sumWithAsyncAwait([1, 2, 3, 4, 5]);
            console.log(`Tổng của các số trong mảng là: ${result}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi khi tính tổng:", error.message);
            }
            else {
                console.error("Lỗi không xác định:", error);
            }
        }
        try {
            const result = yield sumWithAsyncAwait([1, 2, "a", 4, 5]);
            console.log(`Tổng của các số trong mảng là: ${result}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi khi tính tổng:", error.message);
            }
            else {
                console.error("Lỗi không xác định:", error);
            }
        }
        try {
            const result = yield sumWithAsyncAwait("12345");
            console.log(`Tổng của các số trong mảng là: ${result}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi khi tính tổng:", error.message);
            }
            else {
                console.error("Lỗi không xác định:", error);
            }
        }
    });
}
main();
