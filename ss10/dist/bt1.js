"use strict";
// Định nghĩa lớp Vehicle
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
// Tạo ra hai thực thể từ lớp Vehicle
const vehicle1 = new Vehicle("Toyota Corolla", 2020, "Toyota");
const vehicle2 = new Vehicle("Honda Civic", 2018, "Honda");
// Truy cập trực tiếp vào từng thuộc tính và in thông tin
console.log(`Vehicle 1: Name = ${vehicle1.name}, Year = ${vehicle1.year}, Company = ${vehicle1.company}`);
console.log(`Vehicle 2: Name = ${vehicle2.name}, Year = ${vehicle2.year}, Company = ${vehicle2.company}`);
