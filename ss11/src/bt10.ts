class ShapeS {
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

    // Overloaded calculatePerimeter method
    public calculatePerimeter(width: number, height: number): number;
    public calculatePerimeter(radius: number): number;
    public calculatePerimeter(arg1: number, arg2?: number): number {
        if (arg2 !== undefined) {
            // Tính chu vi hình chữ nhật
            return 2 * (arg1 + arg2);
        } else {
            // Tính chu vi hình tròn
            return 2 * Math.PI * arg1;
        }
    }
}

class Rectangles extends ShapeS {
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

    public getPerimeter(): number {
        return this.calculatePerimeter(this.width, this.height);
    }
}

class Circles extends ShapeS {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public getArea(): number {
        return this.calculateArea(this.radius);
    }

    public getPerimeter(): number {
        return this.calculatePerimeter(this.radius);
    }
}

// Tạo thực thể từ lớp Circle và Rectangle
const circles = new Circles(5);
const rectangles = new Rectangles(4, 7);

// Tính diện tích và in ra màn hình
console.log(`Area of Circle: ${circle.getArea()}`);  // Expected: 78.53981633974483
// console.log(`Perimeter of Circle: ${circle.getPerimeter()}`);  // Expected: 31.41592653589793

console.log(`Area of Rectangle: ${rectangle.getArea()}`);  // Expected: 28
// console.log(`Perimeter of Rectangle: ${rectangle.getPerimeter()}`);  // Expected: 22
