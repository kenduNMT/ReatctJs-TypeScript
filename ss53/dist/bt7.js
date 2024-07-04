"use strict";
// Định nghĩa Promise mới có tên myFirstPromise
const myFirstPromise = new Promise((resolve, reject) => {
    // Sử dụng setTimeout để mô phỏng một tác vụ bất đồng bộ
    setTimeout(() => {
        // Gọi hàm resolve với thông điệp "Success!"
        resolve("Success!");
    }, 1000); // 1000ms = 1 giây
});
// Sử dụng .then() để xử lý kết quả trả về từ Promise
myFirstPromise
    .then((message) => {
    console.log(`Result! ${message}`);
})
    .catch((error) => {
    // Xử lý trường hợp lỗi (trong ví dụ này, không có lỗi xảy ra)
    console.error("Lỗi:", error);
});
