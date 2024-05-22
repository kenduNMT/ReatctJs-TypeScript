"use strict";
class Person {
    constructor(sex, height, weight) {
        this.sex = sex;
        this.height = height;
        this.weight = weight;
    }
    calBMI() {
        return this.weight / (this.weight * this.height);
    }
    toString() {
        return `Sex ${this.sex}, height ${this.height}, weight ${this.weight}`;
    }
    // getter: Lấy ra thuộc tính private
    getSex() {
        return this.sex;
    }
    getHeight() {
        return this.height;
    }
    getWeight() {
        return this.weight;
    }
    // setter : thay đổi giá trị của thuộc tính dựa vào tham số truyền vào
    setSex(sex1) {
        this.sex = sex1;
    }
    setHeight(height) {
        this.height = height;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
// class Student extends Person{
//     name: string;
//     age: number;
//     id: string;
//     private balance : number;
//     constructor(name:string, age:number, id:string, sex: boolean,height: number,weight: number) {
//         super(sex, height, weight)
//         this.balance = 0;
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }
//     doHomework() {
//         console.log(`${this.name} đang làm bài tập!`);
//     }
//     toString() {
//         return `Name ${this.name}, Age ${this.age}, ID ${this.id}, Sex ${this.getSex()}, Height ${this.getHeight()}, Weight ${this.getWeight()}`;
//     }
//     toStringPerson() {
//         return super.toString();
//     }
//     getBalance() {
//         return this.balance;
//     }
// }
// tính kế thừa
// Sử dụng từ khóa extends để kế thừa lớp khác
// let student1 : Person = new Student("Huỳnh Tâm Anh",19,"SV001",true,1.6,50);
// console.log(student1.toString()); //gọi đến con
// student1.doHomework()
// console.log(student1.calBMI());
// console.log(student1.toStringPerson()+"Fake");
let person = new Person(true, 1.8, 70);
console.log(person.toString());
// cú pháp khai báo biến 
let variable; // kiểu khai báo là Person
// variable = new Student("Huỳnh Tâm Anh",19,"SV001",true,1.6,50);// kiểu khởi tạo / thực tế
// đối tượng này có thể thự hiện những hành vi hay đặc điểm gì : kiểu khai báo
// Biết được phương thức ghi đè nào đc thực thi : kiểu thực tế
// console.log(variable.toString());
// tính bao đóng
// hạn chế quyền truy cập của các tác nhân bên ngoai :
// private, protected , (default) , public 
// public : có thể truy cập ở bất cứ đâu 
// default (ko khai báo từ khóa) : chỉ có thể truy cập trong package
// protected : cho phép truy cập bên ngoài nhưng phải có quan hệ kế thừa
// private : chỉ cho phép truy cập bên trong lớp
// Bt7
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Getter method để truy cập bán kính
    getRadius() {
        return this.radius;
    }
    // Setter method để thay đổi bán kính
    setRadius(radius) {
        if (radius > 0) {
            this.radius = radius;
        }
        else {
            throw new Error("Bán kính phải lớn hơn 0");
        }
    }
    // Phương thức để tính diện tích
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    // Phương thức để tính chu vi
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
// Khởi tạo và sử dụng đối tượng từ lớp Circle
let circle = new Circle(5);
// In ra bán kính, chu vi và diện tích của đối tượng
console.log(`Bán kính: ${circle.getRadius()}`);
console.log(`Chu vi: ${circle.calculateCircumference()}`);
console.log(`Diện tích: ${circle.calculateArea()}`);
// Cập nhật lại bán kính của đối tượng
circle.setRadius(10);
// In ra bán kính, chu vi và diện tích sau khi cập nhật
console.log(`Bán kính mới: ${circle.getRadius()}`);
console.log(`Chu vi mới: ${circle.calculateCircumference()}`);
console.log(`Diện tích mới: ${circle.calculateArea()}`);
