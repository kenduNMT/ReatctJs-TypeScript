type Username = string;

type Age = number;

// Định nghĩa kiểu đối tượng User sử dụng các alias type đã định nghĩa
type User = {
    username: Username;
    age: Age;
};

// Tạo một đối tượng User sử dụng alias type đã định nghĩa
const user: User = {
    username: "Thuan",
    age: 18
};

// In ra đối tượng User để kiểm tra
console.log(user);
