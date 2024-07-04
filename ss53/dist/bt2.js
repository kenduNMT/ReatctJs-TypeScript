"use strict";
// Định nghĩa hàm chia số
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Không thể chia cho 0.");
        }
        const result = a / b;
        console.log(`Kết quả của ${a} chia cho ${b} là: ${result}`);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi:", error.message);
        }
        else {
            console.error("Lỗi không xác định:", error);
        }
        return null;
    }
    finally {
        console.log("Hàm divideNumbers đã kết thúc.");
    }
}
// Các trường hợp kiểm tra
divideNumbers(10, 2); // Hợp lệ
divideNumbers(10, 0); // Chia cho 0
// divideNumbers('abc', 5); // Error
