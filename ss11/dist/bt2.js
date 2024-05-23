"use strict";
class Employees {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Managers extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
// Tạo thực thể từ lớp Manager và gọi phương thức printInfo để in ra tất cả thông tin vừa khởi tạo
const managers = new Manager('Jane Smith', 'TechCorp', '098-765-4321', 10);
manager.printInfo();
