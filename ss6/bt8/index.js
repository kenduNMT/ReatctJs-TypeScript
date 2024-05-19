"use strict";
// Khai báo và gán giá trị cho các biến
let firstName = "Nguyen";
let lastName = "Thuan";
// Hàm viết hoa chữ cái đầu
function capitalizeFirstLetter(str) {
    if (!str)
        return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Kiểm tra và viết hoa chữ cái đầu
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
// Ghép hai chuỗi lại với dấu cách ở giữa
let fullName = `${firstName} ${lastName}`;
// In kết quả ra màn hình để kiểm tra
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name:", fullName);
