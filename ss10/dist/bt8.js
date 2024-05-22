"use strict";
// Định nghĩa lớp Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Phương thức để truy cập chiều rộng
    getWidth() {
        return this.width;
    }
    // Phương thức để thay đổi chiều rộng
    setWidth(width) {
        this.width = width;
    }
    // Phương thức để truy cập chiều cao
    getHeight() {
        return this.height;
    }
    // Phương thức để thay đổi chiều cao
    setHeight(height) {
        this.height = height;
    }
    // Phương thức để tính diện tích
    calculateArea() {
        return this.width * this.height;
    }
    // Phương thức để tính chu vi
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Khởi tạo 1 đối tượng từ lớp Rectangle
const rectangle = new Rectangle(5, 10);
// In ra chiều dài, chiều rộng, chu vi và diện tích của đối tượng
console.log(`Width: ${rectangle.getWidth()}`);
console.log(`Height: ${rectangle.getHeight()}`);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
// Cập nhật lại kích cỡ của đối tượng
rectangle.setWidth(7);
rectangle.setHeight(14);
// Thực hiện lại các yêu cầu trên
console.log(`Updated Width: ${rectangle.getWidth()}`);
console.log(`Updated Height: ${rectangle.getHeight()}`);
console.log(`Updated Area: ${rectangle.calculateArea()}`);
console.log(`Updated Perimeter: ${rectangle.calculatePerimeter()}`);
