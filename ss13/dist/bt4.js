"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Triển khai phương thức tính diện tích
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    // Triển khai phương thức tính chu vi
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Triển khai phương thức tính diện tích
    calculateArea() {
        return this.width * this.height;
    }
    // Triển khai phương thức tính chu vi
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`); // In ra: Circle Area: 78.53981633974483
console.log(`Circle Perimeter: ${circle.calculatePerimeter()}`); // In ra: Circle Perimeter: 31.41592653589793
const rectangle = new Rectangle(10, 20);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`); // In ra: Rectangle Area: 200
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`); // In ra: Rectangle Perimeter: 60
