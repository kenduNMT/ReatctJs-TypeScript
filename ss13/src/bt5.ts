interface ChangeSpeed {
    // Phương thức tăng tốc
    speedUp(amount: number): void;
    // Phương thức giảm tốc
    slowDown(amount: number): void;
    // Phương thức dừng
    stop(): void;
}
class Vehicle implements ChangeSpeed {
    // Thuộc tính private speed
    private speed: number;

    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }

    // Triển khai phương thức tăng tốc
    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Speeding up by ${amount}. New speed: ${this.speed}`);
    }

    // Triển khai phương thức giảm tốc
    slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Slowing down by ${amount}. New speed: ${this.speed}`);
    }

    // Triển khai phương thức dừng
    stop(): void {
        this.speed = 0;
        console.log(`Stopping the vehicle. New speed: ${this.speed}`);
    }

    // Phương thức lấy giá trị hiện tại của speed
    getSpeed(): number {
        return this.speed;
    }
}
const myVehicle = new Vehicle();
console.log(`Initial speed: ${myVehicle.getSpeed()}`); // In ra: Initial speed: 0

myVehicle.speedUp(50);
console.log(`Current speed: ${myVehicle.getSpeed()}`); // In ra: Current speed: 50

myVehicle.slowDown(20);
console.log(`Current speed: ${myVehicle.getSpeed()}`); // In ra: Current speed: 30

myVehicle.speedUp(30);
console.log(`Current speed: ${myVehicle.getSpeed()}`); // In ra: Current speed: 60

myVehicle.stop();
console.log(`Current speed: ${myVehicle.getSpeed()}`); // In ra: Current speed: 0
