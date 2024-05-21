// Định nghĩa Type Alias cho kiểu dữ liệu RGB Color
type RGBColor = [number, number, number];

// Khai báo một biến kiểu RGBColor và gán giá trị cho nó
let color: RGBColor = [255, 100, 50]; // red = 255, green = 100, blue = 50

// In ra giá trị của biến color
console.log("Màu đỏ:", color[0]);    // In ra: Màu đỏ: 255
console.log("Màu xanh lá cây:", color[1]); // In ra: Màu xanh lá cây: 100
console.log("Màu xanh dương:", color[2]);  // In ra: Màu xanh dương: 50
