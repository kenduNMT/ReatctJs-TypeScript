class Employees {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}

class Managers extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    // Ghi đè phương thức printInfo
    // public override printInfo(): void {
    //     console.log(`Name: ${this.name}`);
    //     console.log(`Company: ${this.company}`);
    //     Không thể truy cập trực tiếp vào thuộc tính private của lớp cha, vì vậy cần thêm phương thức getPhone() để truy cập phone
    //     console.log(`Phone: ${this.getPhone()}`);
    //     console.log(`Team Size: ${this.teamSize}`);
    // }

    // private getPhone(): string {
    //     return this.phone;
    // }
}

// Tạo thực thể từ lớp Manager và gọi phương thức printInfo để in ra tất cả thông tin vừa khởi tạo
const managers = new Manager('Jane Smith', 'TechCorp', '098-765-4321', 10);
manager.printInfo();
