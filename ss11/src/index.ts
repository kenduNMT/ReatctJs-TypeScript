class Shape {
    chuVi: number;
    dienTich: number;
    constructor(chuVi: number, dienTich: number) {
        this.chuVi = chuVi;
        this.dienTich = dienTich;
    }
    showInfo() {
        console.log("Day la hinh hoc");
    }
}

class Square extends Shape {
    canh: number;
    constructor(canh: number) {
        super(0,0)
        this.canh = canh;
    }
    override showInfo(): void {
        console.log("Day la hinh vuong");
    }
    callArea() {
        this.dienTich = this.canh * this.canh;
    }
}

class Triangle extends Shape {
    a : number;
    b : number;
    c : number;
    constructor(a: number,b: number,c: number) {
        super(0,0);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    override showInfo(): void {
        console.log("Day la hinh tam giac");
    }
}

// Tao doi tuong
let shape : Shape = new Shape(0,0);
let square : Shape = new Square(5);
let triangle : Shape = new Triangle(3,4,5);

// Goi phuong thuc showInfo
// Tinh da hinh
shape.showInfo();
square.showInfo();
triangle.showInfo();

// Kiểu khai báo: kiểu dữ liệu lúc khai báo biến
// kiểu thực tế: kiểu khởi tạo đối tượng

// muốn gọi phương thức callArea() của đối tượng square
// let squareCopy = <Square> square;
let squareCopy = square as Square;
squareCopy.callArea();
console.log(squareCopy.dienTich)