// ES6 - B2
/*
    1. Default param - Tham số mặc định
    2. includes - Kiểm tra tồn tại
    3. StartsWith - Chuỗi bắt đầu bằng
    4. EndsWith - Chuỗi kết thúc bằng
    5. class - OOP
    6. Module - import/export
    7. Promise - Lời hứa
*/

// 1. Default param 

const sum = (a=100,b=0) => {
    console.log("a=",a);
    console.log("b=",b);
    console.log(a+b);
}
sum(undefined,1)

// 2. Includes
let arr = [1,2,4,7,8,9,13];
let checkExistNumberSeven = arr.includes(7);
console.log(checkExistNumberSeven);

let today = new Date();
let now = new Date();
let students = {
    id:1,
    name: "Khanh"
}

let arrayObj = [today,students];
console.log(arrayObj.includes(now));

// 3. StartsWith
let string = "rikkei academy";
console.log(string.startsWith("rikkei"));

// 4. EndsWith
console.log(string.endsWith("my"));

// 5. Class - OOP
// OOP (object orient progaming) 
// Class and Object
// before ES6 - OOP

// function Student(id,name) {
//     this.id = id;
//     this.name = name;
// }

// let s1 = new Student(1,"Phu");
// let s2 = new Student(2,"Huy");

// Use Class
class Human {
    constructor(sex) {
        this.sex = sex;
    }
    move() {
        console.log("...moving");
    }
}
class Student extends Human{
    constructor(id,name,age,sex) {
        super(sex)
        this.id = id;
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log("id: "+ this.id+", name: "+ this.name+", age: "+ this.age);
    }
    move() {
        console.log("driving");
    }
}

let s1 = new Student(1,"Thuan",18);
let s2 = new Student(2,"Phu",18);
console.log(s1);
s1.printInfo();
s1.move()

// uu tien khoi tao doi tuong
let obj = {
    id: 1,
    name: "Huy",
}

// 4 đặc điểm của OOP:
// 1. extends(kế thừa)
// 2. Đóng gói (ko có)
// 3. Đa hình (ghi đè) (cùng 1 hàm khác cách triển khai)
// 4. Trừu tượng

// Modules
// Import lay du lieu
// Export xuat du lieu 

//BT
let phoneBooks = [];

class Contact {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

function addContact(name, phoneNumber, email) {
    let contact = new Contact(name, phoneNumber, email);
    phoneBooks = [...phoneBooks, contact];
}

function displayContacts() {
    if (phoneBooks.length === 0) {
        console.log("Danh bạ trống.");
        return;
    }

    console.log("Danh bạ điện thoại:");
    phoneBooks.forEach((contact, index) => {
        console.log(`${index + 1}. Tên: ${contact.name}, Số Điện Thoại: ${contact.phoneNumber}, Email: ${contact.email}`);
    });
}

addContact("Nguyễn Văn A", "0123456789", "nguyenvana@example.com");
addContact("Trần Thị B", "0987654321", "tranthib@example.com");

displayContacts();

// Promise : xử lí các thao tác bất đồng bộ trong js
// VD: lấy dữ liệu tốn 1 thời gian
// Nếu Promise thành công : trạng thái resolve()
// Nếu Promise thất bại : trạng thái reject()

// Khởi tạo lời hứa
let myPromise = new Promise((resolve, reject)=> {
    // Success
    let data = [1,2,3,4,5];
    // resolve(data);
    // Fail
    let messeage = "register fail";
    reject(messeage)
})
class Error0 {
    constructor(messeage,code) {
        this.messeage = messeage;
        this.code = code;
    }
}
// Call Promise
myPromise.then(
    (data)=> {
        console.log(data);
    },
    (messeage)=> {
        console.log(messeage);
        throw new Error0("fail connect", 400);
    }
)
.catch((err)=> {
    console.log(err);
})

// Call API
fetch('https://jsonplaceholder.typicode.com/posts') // là 1 promise
.then((res)=>res.json()) // Chuyển đổi json
.then(data => console.log(data)) // In ra dữ liệu
.catch(err => console.log(err)) // Bắt lỗi sinh ra 
