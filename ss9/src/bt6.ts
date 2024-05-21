// Định nghĩa Type Alias cho kiểu dữ liệu Coordinates
type Coordinates = [number, number];

// Sử dụng Type Alias để khai báo biến coordinates
let coordinates: Coordinates;

// Gán giá trị cho biến coordinates
coordinates = [10.1234, 106.5678]; // latitude = 10.1234, longitude = 106.5678

// In ra giá trị của biến coordinates
console.log("Tọa độ:", coordinates); // In ra: Tọa độ: [10.1234, 106.5678]
