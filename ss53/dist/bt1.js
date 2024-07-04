"use strict";
// Định nghĩa hàm tính chỉ số BMI
function calculateBMI(weight, height) {
    if (isNaN(weight) || isNaN(height)) {
        throw new Error("Cân nặng và chiều cao phải là số.");
    }
    if (weight <= 0 || height <= 0) {
        throw new Error("Cân nặng và chiều cao phải lớn hơn 0.");
    }
    return weight / (height * height);
}
// Hàm kiểm tra và gọi hàm calculateBMI với xử lý ngoại lệ
function getBMI(weight, height) {
    try {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            throw new Error("Cân nặng và chiều cao phải là kiểu số.");
        }
        const bmi = calculateBMI(weight, height);
        console.log(`Chỉ số BMI là: ${bmi.toFixed(2)}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Lỗi:", error.message);
        }
        else {
            console.error("Lỗi không xác định:", error);
        }
    }
}
// Các trường hợp kiểm tra
getBMI(70, 1.75); // Hợp lệ
getBMI(-70, 1.75); // Cân nặng không hợp lệ
getBMI(70, -1.75); // Chiều cao không hợp lệ
getBMI("70", 1.75); // Cân nặng không phải là số
getBMI(70, "1.75"); // Chiều cao không phải là số
getBMI(NaN, 1.75); // Cân nặng là NaN
getBMI(70, NaN); // Chiều cao là NaN
