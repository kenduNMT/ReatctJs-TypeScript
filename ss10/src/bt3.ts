// Định nghĩa lớp Employee
class Employee {
    public name: string;         // Tên nhân viên có phạm vi truy cập là public
    protected company: string;   // Tên công ty có mức phạm vi truy cập là protected
    private phone: string;       // Số điện thoại có mức phạm vi truy cập là private

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    // Phương thức để in ra tất cả các thuộc tính
    public printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}

// Tạo ra một thực thể từ lớp Employee
const employee = new Employee("Thuan", "TechCorp", "123-456-7890");

// Gọi phương thức printInfo() để in ra các thuộc tính
employee.printInfo();
