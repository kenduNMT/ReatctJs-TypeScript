"use strict";
class ShapeS {
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
    calculatePerimeter(arg1, arg2) {
        if (arg2 !== undefined) {
            // Tính chu vi hình chữ nhật
            return 2 * (arg1 + arg2);
        }
        else {
            // Tính chu vi hình tròn
            return 2 * Math.PI * arg1;
        }
    }
}
class Rectangles extends ShapeS {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.calculateArea(this.width, this.height);
    }
    getPerimeter() {
        return this.calculatePerimeter(this.width, this.height);
    }
}
class Circles extends ShapeS {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return this.calculateArea(this.radius);
    }
    getPerimeter() {
        return this.calculatePerimeter(this.radius);
    }
}
// Tạo thực thể từ lớp Circle và Rectangle
const circles = new Circles(5);
const rectangles = new Rectangles(4, 7);
// Tính diện tích và in ra màn hình
console.log(`Area of Circle: ${circle.getArea()}`); // Expected: 78.53981633974483
// console.log(`Perimeter of Circle: ${circle.getPerimeter()}`);  // Expected: 31.41592653589793
console.log(`Area of Rectangle: ${rectangle.getArea()}`); // Expected: 28
// console.log(`Perimeter of Rectangle: ${rectangle.getPerimeter()}`);  // Expected: 22
