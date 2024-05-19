"use strict";
// Khai báo các biến với các kiểu dữ liệu tương ứng
let Name = "Thuan";
let age = 30;
let job = "Software Developer";
// Xây dựng hàm nhận vào 3 tham số
function displayInfo(Name, age, job) {
    console.log(`Name: ${Name}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
// Gọi hàm với các đối số là 3 biến vừa tạo
displayInfo(Name, age, job);
