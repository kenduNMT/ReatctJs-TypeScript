"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    // Phương thức printType để in ra loại công việc
    printType() {
        console.log(`Job Type: ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        // Gọi constructor của lớp cha để khởi tạo thuộc tính type
        super(type);
        this.workingHour = workingHour;
    }
    // Triển khai phương thức calculateSalary để tính lương part-time
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        // Gọi constructor của lớp cha để khởi tạo thuộc tính type
        super(type);
    }
    // Triển khai phương thức calculateSalary để tính lương full-time
    calculateSalary() {
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
