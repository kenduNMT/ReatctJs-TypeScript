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
// Định nghĩa hàm isPrimeWithPromise
function isPrimeWithPromise(n) {
    return new Promise((resolve, reject) => {
        if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n)) {
            reject(new Error("Tham số phải là một số nguyên."));
            return;
        }
        if (n <= 1) {
            resolve(false);
            return;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                resolve(false);
                return;
            }
        }
        resolve(true);
    });
}
// Định nghĩa hàm isPrimeWithAsyncAwait
function isPrimeWithAsyncAwait(n) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield isPrimeWithPromise(n);
            return result;
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
            const result = yield isPrimeWithAsyncAwait(7);
            console.log(`Số 7 có phải là số nguyên tố không? ${result}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi khi kiểm tra số 7:", error.message);
            }
            else {
                console.error("Lỗi không xác định khi kiểm tra số 7:", error);
            }
        }
        try {
            const result = yield isPrimeWithAsyncAwait(10);
            console.log(`Số 10 có phải là số nguyên tố không? ${result}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi khi kiểm tra số 10:", error.message);
            }
            else {
                console.error("Lỗi không xác định khi kiểm tra số 10:", error);
            }
        }
        try {
            const result = yield isPrimeWithAsyncAwait("hello");
            console.log(`"hello" có phải là số nguyên tố không? ${result}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi khi kiểm tra 'hello':", error.message);
            }
            else {
                console.error("Lỗi không xác định khi kiểm tra 'hello':", error);
            }
        }
        try {
            const result = yield isPrimeWithAsyncAwait(1);
            console.log(`Số 1 có phải là số nguyên tố không? ${result}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Lỗi khi kiểm tra số 1:", error.message);
            }
            else {
                console.error("Lỗi không xác định khi kiểm tra số 1:", error);
            }
        }
    });
}
main();
