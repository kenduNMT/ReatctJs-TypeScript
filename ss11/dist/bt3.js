"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    // Ghi đè phương thức displayInfo
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
    }
}
// Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in thông tin
const student = new Student('Nguyễn Thuận', 12345);
student.displayInfo();
