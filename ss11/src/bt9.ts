class Shapes {
    // Overloaded calculateArea method
    public calculateArea(width: number, height: number): number;
    public calculateArea(radius: number): number;
    public calculateArea(arg1: number, arg2?: number): number {
        if (arg2 !== undefined) {
            // Tính diện tích hình chữ nhật
            return arg1 * arg2;
        } else {
            // Tính diện tích hình tròn
            return Math.PI * arg1 * arg1;
        }
    }
}

class Rectangle extends Shapes {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    public getArea(): number {
        return this.calculateArea(this.width, this.height);
    }
}

class Circle extends Shapes {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public getArea(): number {
        return this.calculateArea(this.radius);
    }
}

// Tạo thực thể từ lớp Circle và Rectangle
const circle = new Circle(5);
const rectangle = new Rectangle(4, 7);

// Tính diện tích và in ra màn hình
console.log(`Area of Circle: ${circle.getArea()}`);  // Expected: 78.53981633974483
console.log(`Area of Rectangle: ${rectangle.getArea()}`);  // Expected: 28
