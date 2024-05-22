// Định nghĩa lớp Department
class Department {
    public readonly id: number;  // ID có phạm vi là public và readonly
    private name: string;        // Tên phòng ban có phạm vi là private
    private employees: string[]; // Mảng các nhân viên có phạm vi là private

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }

    // Phương thức describe để in ra id và tên của phòng ban
    public describe(): void {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }

    // Phương thức để thêm nhân viên vào phòng ban
    public addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    // Phương thức để in ra tất cả các nhân viên trong phòng ban
    public printEmployees(): void {
        console.log(`Employees in ${this.name}: ${this.employees.join(', ')}`);
    }
}

// Tạo ra một thực thể từ lớp Department
const department = new Department(1, "Engineering");

// Gọi phương thức describe() để in ra id và tên phòng ban
department.describe();

// Thêm nhân viên vào phòng ban
department.addEmployee("Alice");
department.addEmployee("Bob");

// In ra danh sách nhân viên trong phòng ban
department.printEmployees();
