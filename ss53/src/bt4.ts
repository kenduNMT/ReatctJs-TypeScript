// Định nghĩa hàm sumWithPromise
function sumWithPromise(numbers: number[]): Promise<number> {
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
async function sumWithAsyncAwait(numbers: number[]): Promise<number> {
    try {
        const sum = await sumWithPromise(numbers);
        return sum;
    } catch (error) {
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
        const result = await sumWithAsyncAwait([1, 2, 3, 4, 5]);
        console.log(`Tổng của các số trong mảng là: ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi khi tính tổng:", error.message);
        } else {
            console.error("Lỗi không xác định:", error);
        }
    }

    try {
        const result = await sumWithAsyncAwait([1, 2, "a", 4, 5]);
        console.log(`Tổng của các số trong mảng là: ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi khi tính tổng:", error.message);
        } else {
            console.error("Lỗi không xác định:", error);
        }
    }

    try {
        const result = await sumWithAsyncAwait("12345" as any);
        console.log(`Tổng của các số trong mảng là: ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi khi tính tổng:", error.message);
        } else {
            console.error("Lỗi không xác định:", error);
        }
    }
}

main();
