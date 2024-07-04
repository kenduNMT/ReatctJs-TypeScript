"use strict";
function findElement(arr, value) {
    return new Promise((resolve, reject) => {
        // Kiểm tra nếu arr không phải là một mảng hoặc mảng có chứa phần tử không phải là số
        if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
            reject(new Error("Tham số đầu vào không hợp lệ."));
            return;
        }
        // Tìm phần tử đầu tiên có giá trị bằng với giá trị tìm kiếm
        const foundElement = arr.find(item => item === value);
        // Giải quyết Promise với phần tử tìm thấy hoặc thông báo nếu không tìm thấy
        if (foundElement !== undefined) {
            resolve(foundElement);
        }
        else {
            resolve("Không tìm thấy phần tử");
        }
    });
}
// Gọi hàm findElement và xử lý kết quả
findElement([10, 20, 30, 40, 50], 30)
    .then(result => {
    console.log("Kết quả:", result);
})
    .catch((error) => {
    if (error instanceof Error) {
        console.error("Lỗi:", error.message);
    }
    else {
        console.error("Lỗi không xác định:", error);
    }
});
findElement([10, 20, 30, 40, 50], 60)
    .then(result => {
    console.log("Kết quả:", result);
})
    .catch((error) => {
    if (error instanceof Error) {
        console.error("Lỗi:", error.message);
    }
    else {
        console.error("Lỗi không xác định:", error);
    }
});
