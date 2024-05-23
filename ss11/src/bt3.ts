class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    public id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    // Ghi đè phương thức displayInfo
    public override displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
    }
}

// Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in thông tin
const student = new Student('Nguyễn Thuận', 12345);
student.displayInfo();
