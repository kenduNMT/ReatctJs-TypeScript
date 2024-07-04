"use strict";
/**
 * Hàm sortArrayWithPromise nhận vào một mảng các số nguyên và trả về một Promise với mảng đã được sắp xếp theo thứ tự tăng dần.
 * @param arr - Một mảng các số nguyên cần được sắp xếp.
 * @returns - Một Promise trả về mảng đã được sắp xếp theo thứ tự tăng dần.
 */
function sortArrayWithPromise(arr) {
    return new Promise((resolve, reject) => {
        // Kiểm tra nếu arr không phải là một mảng hoặc mảng có chứa phần tử không phải là số
        if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
            reject(new Error("Tham số phải là một mảng các số nguyên."));
            return;
        }
        // Sắp xếp mảng theo thứ tự tăng dần
        const sortedArray = arr.sort((a, b) => a - b);
        // Giải quyết Promise với mảng đã được sắp xếp
        resolve(sortedArray);
    });
}
// Gọi hàm sortArrayWithPromise và xử lý kết quả
sortArrayWithPromise([5, 3, 8, 1, 2])
    .then((sortedArray) => {
    console.log("Mảng đã được sắp xếp theo thứ tự tăng dần:", sortedArray);
})
    .catch((error) => {
    if (error instanceof Error) {
        console.error("Lỗi:", error.message);
    }
    else {
        console.error("Lỗi không xác định:", error);
    }
});
