class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
    }

    public speedUp(amount: number): void {
        this.speed += amount;
    }

    public showSpeed(): void {
        console.log(`${this.name} (ID: ${this.id}) is going at ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    public showInfo(): void {
        console.log(`Bicycle Info - Name: ${this.name}, ID: ${this.id}, Speed: ${this.speed}, Gear: ${this.gear}`);
    }

    public setGear(gear: number): void {
        this.gear = gear;
    }
}

// Khởi tạo đối tượng từ lớp Bicycle
const myBicycle = new Bicycle('Mountain Bike', 20, 1, 5);

// Tăng tốc
myBicycle.speedUp(10);
myBicycle.showSpeed();  // Expected: Mountain Bike (ID: 1) is going at 30 km/h

// Giảm tốc
myBicycle.slowDown(15);
myBicycle.showSpeed();  // Expected: Mountain Bike (ID: 1) is going at 15 km/h

// Hiển thị thông tin chi tiết
myBicycle.showInfo();  // Expected: Bicycle Info - Name: Mountain Bike, ID: 1, Speed: 15, Gear: 5

// Thay đổi số bánh răng và hiển thị lại thông tin
myBicycle.setGear(7);
myBicycle.showInfo();  // Expected: Bicycle Info - Name: Mountain Bike, ID: 1, Speed: 15, Gear: 7
