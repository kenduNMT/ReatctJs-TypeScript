abstract class Animal {
    // Thuộc tính name
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method: Phương thức chung có thể được dùng bởi các lớp con
    printName(): void {
        console.log(`Animal name: ${this.name}`);
    }

    // Abstract method: Phương thức bắt buộc các lớp con phải triển khai
    abstract makeSound(): void;
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Triển khai abstract method
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Triển khai abstract method
    makeSound(): void {
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
