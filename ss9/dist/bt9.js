"use strict";
// Sử dụng Type Alias và Literal Types để khai báo biến response
let response;
// Gán giá trị cho biến response
response = {
    status: "success",
    message: "Request successful"
};
// In ra thông tin của biến response
console.log("Trạng thái:", response.status); // In ra: Trạng thái: success
console.log("Thông báo:", response.message); // In ra: Thông báo: Request successful
