"use strict";
class Shape {
    constructor(chuVi, dienTich) {
        this.chuVi = chuVi;
        this.dienTich = dienTich;
    }
    showInfo() {
        console.log("Day la hinh hoc");
    }
}
class Square extends Shape {
    constructor(canh) {
        super(0, 0);
        this.canh = canh;
    }
    showInfo() {
        console.log("Day la hinh vuong");
    }
    callArea() {
        this.dienTich = this.canh * this.canh;
    }
}
class Triangle extends Shape {
    constructor(a, b, c) {
        super(0, 0);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    showInfo() {
        console.log("Day la hinh tam giac");
    }
}
// Tao doi tuong
let shape = new Shape(0, 0);
let square = new Square(5);
let triangle = new Triangle(3, 4, 5);
// Goi phuong thuc showInfo
// Tinh da hinh
shape.showInfo();
square.showInfo();
triangle.showInfo();
// Kiểu khai báo: kiểu dữ liệu lúc khai báo biến
// kiểu thực tế: kiểu khởi tạo đối tượng
// muốn gọi phương thức callArea() của đối tượng square
// let squareCopy = <Square> square;
let squareCopy = square;
squareCopy.callArea();
console.log(squareCopy.dienTich);
