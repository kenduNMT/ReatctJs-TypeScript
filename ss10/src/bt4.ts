// Định nghĩa lại lớp Vehicle với các access modifier
class VehiclE {
    public name: string;         // Tên phương tiện có phạm vi truy cập là public
    protected year: number;      // Năm sản xuất có mức phạm vi truy cập là protected
    private company: string;     // Hãng xe có mức phạm vi truy cập là private
    public readonly id: number;  // ID của phương tiện có từ khóa readonly

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    // Phương thức để in ra các thông tin của phương tiện
    public printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}

// Tạo ra một thực thể từ lớp Vehicle
const vehicle = new VehiclE(1, "Toyota Corolla", 2020, "Toyota");

// Gọi phương thức printInfo() để in ra các thông tin
vehicle.printInfo();

// Kiểm tra thuộc tính readonly
console.log(`ID (readonly): ${vehicle.id}`);

// Truy cập vào thuộc tính public
console.log(`Name (public): ${vehicle.name}`);

// Thử truy cập vào thuộc tính protected và private (sẽ gây lỗi nếu truy cập ngoài lớp hoặc subclass)
// console.log(vehicle.year);    // Lỗi: Property 'year' is protected and only accessible within class 'Vehicle' and its subclasses.
// console.log(vehicle.company); // Lỗi: Property 'company' is private and only accessible within class 'Vehicle'.
