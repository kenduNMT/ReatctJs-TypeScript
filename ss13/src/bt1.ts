abstract class Shape {
    // Thuộc tính name để lưu tên của hình
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức getName để lấy ra tên của hình
    getName(): string {
        return this.name;
    }

    // Phương thức abstract getSize để in ra các kích cỡ của hình (phải được triển khai ở lớp con)
    abstract getSize(): void;
}

class Rectangles extends Shape {
    // Thuộc tính width và height để lưu kích thước của hình chữ nhật
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        // Gọi constructor của lớp cha để khởi tạo thuộc tính name
        super(name);
        this.width = width;
        this.height = height;
    }

    // Triển khai phương thức getSize để in ra kích thước của hình chữ nhật
    getSize(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}

// Sử dụng lớp Rectangle
const rectangles = new Rectangles('Rectangle', 10, 20);
console.log(rectangles.getName()); // In ra: Rectangle
rectangles.getSize(); // In ra: Width: 10, Height: 20
