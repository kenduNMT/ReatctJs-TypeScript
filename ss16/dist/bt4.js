"use strict";
// Hàm generic kiểm tra điều kiện và in ra thông điệp tương ứng
function checkCondition(condition, trueMessage, falseMessage) {
    if (condition) {
        console.log(trueMessage);
    }
    else {
        console.log(falseMessage);
    }
}
// Khai báo biến kiểu boolean và gán giá trị
let isGreeting = true;
// Sử dụng hàm generic với biến boolean và các thông điệp
checkCondition(isGreeting, "Xin chào", "Tạm biệt");
// Thử lại với giá trị boolean khác
isGreeting = false;
checkCondition(isGreeting, "Xin chào", "Tạm biệt");
