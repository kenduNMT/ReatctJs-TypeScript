"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount);
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`${this.name} (ID: ${this.id}) is going at ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Bicycle Info - Name: ${this.name}, ID: ${this.id}, Speed: ${this.speed}, Gear: ${this.gear}`);
    }
    setGear(gear) {
        this.gear = gear;
    }
}
// Khởi tạo đối tượng từ lớp Bicycle
const myBicycle = new Bicycle('Mountain Bike', 20, 1, 5);
// Tăng tốc
myBicycle.speedUp(10);
myBicycle.showSpeed(); // Expected: Mountain Bike (ID: 1) is going at 30 km/h
// Giảm tốc
myBicycle.slowDown(15);
myBicycle.showSpeed(); // Expected: Mountain Bike (ID: 1) is going at 15 km/h
// Hiển thị thông tin chi tiết
myBicycle.showInfo(); // Expected: Bicycle Info - Name: Mountain Bike, ID: 1, Speed: 15, Gear: 5
// Thay đổi số bánh răng và hiển thị lại thông tin
myBicycle.setGear(7);
myBicycle.showInfo(); // Expected: Bicycle Info - Name: Mountain Bike, ID: 1, Speed: 15, Gear: 7
