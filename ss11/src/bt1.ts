class Employee {
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

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    public printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

// Test code
const employee = new Employee('John Doe', 'TechCorp', '123-456-7890');
employee.printInfo();

const manager = new Manager('Jane Smith', 'TechCorp', '098-765-4321', 10);
manager.printInfo();
