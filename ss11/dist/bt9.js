"use strict";
class Shapes {
    calculateArea(arg1, arg2) {
        if (arg2 !== undefined) {
            // Tính diện tích hình chữ nhật
            return arg1 * arg2;
        }
        else {
            // Tính diện tích hình tròn
            return Math.PI * arg1 * arg1;
        }
    }
}
class Rectangle extends Shapes {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.calculateArea(this.width, this.height);
    }
}
class Circle extends Shapes {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return this.calculateArea(this.radius);
    }
}
// Tạo thực thể từ lớp Circle và Rectangle
const circle = new Circle(5);
const rectangle = new Rectangle(4, 7);
// Tính diện tích và in ra màn hình
console.log(`Area of Circle: ${circle.getArea()}`); // Expected: 78.53981633974483
console.log(`Area of Rectangle: ${rectangle.getArea()}`); // Expected: 28
