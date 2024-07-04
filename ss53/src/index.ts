// // Định nghĩa kiểu dữ liệu cho callback function
// type CallbackFunction = (index: number, element: number) => void;

// // Hàm processArray nhận vào mảng các số nguyên và callback function
// function processArray(arr: number[], callback: CallbackFunction): void {
//     let index = 0;
//     const intervalId = setInterval(() => {
//         if (index < arr.length) {
//             callback(index, arr[index]);
//             index++;
//         } else {
//             clearInterval(intervalId); // Dừng interval khi đã duyệt hết mảng
//         }
//     }, 1000);
// }

// // Hàm callback để in ra phần tử
// function printElement(index: number, elem: number): void {
//     console.log(`Phần tử thứ ${index + 1} : ${elem}`);
// }

// // Mảng các số nguyên
// const arr = [1, 2, 3, 4, 5];

// // Gọi hàm processArray với mảng và callback function
// processArray(arr, printElement);

// async function f() {
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("done"),1000)
//     });
//     let result = await promise;
//     alert(result)
// }
// f()

function fibonacci(n: number): Promise<number> {
    // Kiểm tra nếu n <= 0, ném ra lỗi
    if (n <= 0) {
        throw new Error("Dữ liệu nhập vào không hợp lệ");
    }

    // Hàm đệ quy để tính toán số Fibonacci bắt đầu từ 1, 1
    function fibRecursive(n: number): number {
        // Điều chỉnh chỉ số để phù hợp với kết quả mong muốn
        if (n === 1) return 1;
        if (n === 2) return 1;
        return fibRecursive(n - 1) + fibRecursive(n - 2);
    }

    // Sử dụng async/await để tính toán bất đồng bộ
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fibRecursive(n));
        }, 0);
    });
}

// Hàm không đồng bộ để gọi và lấy kết quả
async function calculateFibonacci(n: number) {
    try {
        const result = await fibonacci(n);
        console.log(`fibonacci(${n}) = ${result}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Đã xảy ra lỗi không xác định");
        }
    }
}

// Ví dụ sử dụng
calculateFibonacci(9); // fibonacci(10) = 34
calculateFibonacci(14); // fibonacci(15) = 377
