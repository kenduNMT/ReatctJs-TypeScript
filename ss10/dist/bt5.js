"use strict";
// Định nghĩa lớp Department
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    // Phương thức describe để in ra id và tên của phòng ban
    describe() {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }
    // Phương thức để thêm nhân viên vào phòng ban
    addEmployee(employee) {
        this.employees.push(employee);
    }
    // Phương thức để in ra tất cả các nhân viên trong phòng ban
    printEmployees() {
        console.log(`Employees in ${this.name}: ${this.employees.join(', ')}`);
    }
}
// Tạo ra một thực thể từ lớp Department
const department = new Department(1, "Engineering");
// Gọi phương thức describe() để in ra id và tên phòng ban
department.describe();
// Thêm nhân viên vào phòng ban
department.addEmployee("Alice");
department.addEmployee("Bob");
// In ra danh sách nhân viên trong phòng ban
department.printEmployees();
