// Định nghĩa hàm isPrimeWithPromise
function isPrimeWithPromise(n: number): Promise<boolean> {
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
async function isPrimeWithAsyncAwait(n: number): Promise<boolean> {
    try {
        const result = await isPrimeWithPromise(n);
        return result;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Lỗi:", error.message);
        } else {
            console.error("Lỗi không xác định:", error);
        }
        throw error;
    }
}

// Gọi hàm và in kết quả ra màn hình console
async function main() {
    try {
        const result = await isPrimeWithAsyncAwait(7);
        console.log(`Số 7 có phải là số nguyên tố không? ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi khi kiểm tra số 7:", error.message);
        } else {
            console.error("Lỗi không xác định khi kiểm tra số 7:", error);
        }
    }

    try {
        const result = await isPrimeWithAsyncAwait(10);
        console.log(`Số 10 có phải là số nguyên tố không? ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi khi kiểm tra số 10:", error.message);
        } else {
            console.error("Lỗi không xác định khi kiểm tra số 10:", error);
        }
    }

    try {
        const result = await isPrimeWithAsyncAwait("hello" as any);
        console.log(`"hello" có phải là số nguyên tố không? ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi khi kiểm tra 'hello':", error.message);
        } else {
            console.error("Lỗi không xác định khi kiểm tra 'hello':", error);
        }
    }

    try {
        const result = await isPrimeWithAsyncAwait(1);
        console.log(`Số 1 có phải là số nguyên tố không? ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi khi kiểm tra số 1:", error.message);
        } else {
            console.error("Lỗi không xác định khi kiểm tra số 1:", error);
        }
    }
}

main();
