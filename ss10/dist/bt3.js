"use strict";
// Định nghĩa lớp Employee
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    // Phương thức để in ra tất cả các thuộc tính
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
// Tạo ra một thực thể từ lớp Employee
const employee = new Employee("Thuan", "TechCorp", "123-456-7890");
// Gọi phương thức printInfo() để in ra các thuộc tính
employee.printInfo();
