"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Phương thức getName để lấy ra tên của hình
    getName() {
        return this.name;
    }
}
class Rectangles extends Shape {
    constructor(name, width, height) {
        // Gọi constructor của lớp cha để khởi tạo thuộc tính name
        super(name);
        this.width = width;
        this.height = height;
    }
    // Triển khai phương thức getSize để in ra kích thước của hình chữ nhật
    getSize() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
// Sử dụng lớp Rectangle
const rectangles = new Rectangles('Rectangle', 10, 20);
console.log(rectangles.getName()); // In ra: Rectangle
rectangles.getSize(); // In ra: Width: 10, Height: 20
