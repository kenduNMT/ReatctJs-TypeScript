function countDown(n: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        // Kiểm tra số giây đầu vào
        if (typeof n !== 'number' || isNaN(n) || n <= 0 || !Number.isInteger(n)) {
            reject(new Error("Tham số phải là một số nguyên dương."));
            return;
        }

        // Sử dụng setInterval để thực hiện đếm ngược
        const intervalId = setInterval(() => {
            if (n > 0) {
                console.log(`Còn lại ${n} giây`);
            } else {
                console.log("Hoàn thành quá trình đếm");
                clearInterval(intervalId); // Dừng interval khi đếm ngược hoàn tất
                resolve(); // Giải quyết Promise khi đếm ngược xong
            }
            n--; // Giảm số giây còn lại
        }, 1000);  // 1000ms = 1 giây
    });
}

// Gọi hàm countDown và xử lý kết quả
countDown(5)
    .then(() => {
        console.log("Đếm ngược đã hoàn thành.");
    })
    .catch((error: unknown) => {
        if (error instanceof Error) {
            console.error("Lỗi:", error.message);
        } else {
            console.error("Lỗi không xác định:", error);
        }
    });
