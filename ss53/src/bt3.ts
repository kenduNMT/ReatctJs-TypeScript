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

// Gọi hàm và in kết quả ra màn hình console
sumWithPromise([1, 2, 3, 4, 5])
    .then(result => {
        console.log(`Tổng của các số trong mảng là: ${result}`);
    })
    .catch(error => {
        console.error("Lỗi:", error.message);
    });

// Thử nghiệm với mảng không hợp lệ
sumWithPromise([1, 2, "a", 4, 5])
    .then(result => {
        console.log(`Tổng của các số trong mảng là: ${result}`);
    })
    .catch(error => {
        console.error("Lỗi:", error.message);
    });

sumWithPromise("12345")
    .then(result => {
        console.log(`Tổng của các số trong mảng là: ${result}`);
    })
    .catch(error => {
        console.error("Lỗi:", error.message);
    });
