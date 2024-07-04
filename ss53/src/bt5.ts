// Định nghĩa hàm isPrimeWithPromise
function isPrimeWithPromise(n: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n)) {
            reject(new Error("Tham số phải là một số nguyên."));
        }

        if (n <= 1) {
            resolve(false);
        }

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                resolve(false);
            }
        }

        resolve(true);
    });
}

// Gọi hàm và in kết quả ra màn hình console
isPrimeWithPromise(7)
    .then(result => {
        console.log(`Số 7 có phải là số nguyên tố không? ${result}`);
    })
    .catch(error => {
        console.error("Lỗi:", error.message);
    });

isPrimeWithPromise(10)
    .then(result => {
        console.log(`Số 10 có phải là số nguyên tố không? ${result}`);
    })
    .catch(error => {
        console.error("Lỗi:", error.message);
    });

isPrimeWithPromise("hello" as any)
    .then(result => {
        console.log(`"hello" có phải là số nguyên tố không? ${result}`);
    })
    .catch(error => {
        console.error("Lỗi:", error.message);
    });

isPrimeWithPromise(1)
    .then(result => {
        console.log(`Số 1 có phải là số nguyên tố không? ${result}`);
    })
    .catch(error => {
        console.error("Lỗi:", error.message);
    });
