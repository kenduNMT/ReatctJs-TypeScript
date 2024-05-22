// Định nghĩa lớp Student
class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

// Khai báo mảng để chứa các sinh viên
let students: Student[] = [];

// Tạo ra các thực thể sinh viên và lưu vào mảng
students.push(new Student(1, 20, "student1@example.com"));
students.push(new Student(2, 21, "student2@example.com"));
students.push(new Student(3, 22, "student3@example.com"));

// Duyệt mảng và in ra các sinh viên
for (const student of students) {
    console.log(`Student ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
