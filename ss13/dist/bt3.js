"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method: Phương thức chung có thể được dùng bởi các lớp con
    printName() {
        console.log(`Animal name: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    // Triển khai abstract method
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    // Triển khai abstract method
    makeSound() {
        console.log("Meow! Meow!");
    }
}
// Sử dụng các lớp Dog và Cat
const dog = new Dog('Buddy');
dog.printName(); // In ra: Animal name: Buddy
dog.makeSound(); // In ra: Woof! Woof!
const cat = new Cat('Whiskers');
cat.printName(); // In ra: Animal name: Whiskers
cat.makeSound(); // In ra: Meow! Meow!
