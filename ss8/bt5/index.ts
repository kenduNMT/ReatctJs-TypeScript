// Định nghĩa các kiểu cho các hình học
interface Square {
    kind: 'square';
    sideLength: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

// Sử dụng Union Type để kết hợp các loại hình học
type Shape = Square | Circle;

// Hàm calculateArea với Type Guards để xác định loại hình học và tính diện tích
function calculateArea(shape: Shape): number {
    if (isSquare(shape)) {
        return shape.sideLength * shape.sideLength;
    } else if (isCircle(shape)) {
        return Math.PI * shape.radius * shape.radius;
    } else {
        throw new Error('Invalid shape type');
    }
}

// Type Guard để xác định nếu đối tượng là hình vuông
function isSquare(shape: Shape): shape is Square {
    return shape.kind === 'square';
}

// Type Guard để xác định nếu đối tượng là hình tròn
function isCircle(shape: Shape): shape is Circle {
    return shape.kind === 'circle';
}

// Ví dụ cách sử dụng hàm calculateArea
const square: Square = { kind: 'square', sideLength: 5 };
const circle: Circle = { kind: 'circle', radius: 3 };

console.log(calculateArea(square)); // Output: 25
console.log(calculateArea(circle)); // Output: 28.274333882308138
