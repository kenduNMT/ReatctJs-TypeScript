abstract class Job {
    // Thuộc tính type để lưu loại công việc
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    // Phương thức printType để in ra loại công việc
    printType(): void {
        console.log(`Job Type: ${this.type}`);
    }

    // Phương thức abstract calculateSalary để tính lương (phải được triển khai ở lớp con)
    abstract calculateSalary(): number;
}

class PartimeJob extends Job {
    // Thuộc tính workingHour để lưu số giờ làm việc part-time
    private workingHour: number;

    constructor(type: string, workingHour: number) {
        // Gọi constructor của lớp cha để khởi tạo thuộc tính type
        super(type);
        this.workingHour = workingHour;
    }

    // Triển khai phương thức calculateSalary để tính lương part-time
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        // Gọi constructor của lớp cha để khởi tạo thuộc tính type
        super(type);
    }

    // Triển khai phương thức calculateSalary để tính lương full-time
    calculateSalary(): number {
        return 10000000;
    }
}

// Sử dụng các lớp PartimeJob và FulltimeJob
const partimeJob = new PartimeJob('Part-time', 80);
partimeJob.printType(); // In ra: Job Type: Part-time
console.log(`Part-time Job Salary: ${partimeJob.calculateSalary()}`); // In ra: Part-time Job Salary: 2400000

const fulltimeJob = new FulltimeJob('Full-time');
fulltimeJob.printType(); // In ra: Job Type: Full-time
console.log(`Full-time Job Salary: ${fulltimeJob.calculateSalary()}`); // In ra: Full-time Job Salary: 10000000
