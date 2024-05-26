class StudentS {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

class Classrooms {
    // Thuộc tính students là mảng các học sinh trong lớp
    private students: StudentS[] = [];

    // Phương thức thêm học sinh vào lớp
    addStudent(studentId: number): void {
        const studentIndex = allStudentsS.findIndex(student => student.getId() === studentId);
        if (studentIndex !== -1) {
            const student = allStudentsS.splice(studentIndex, 1)[0]; // Xóa học sinh khỏi allStudents và thêm vào lớp
            this.students.push(student);
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }

    // Phương thức in ra danh sách học sinh trong lớp
    showStudents(): void {
        console.log("Students in the classroom:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }

    // Phương thức xóa học sinh khỏi lớp và thêm lại vào allStudents
    removeStudent(studentId: number): void {
        const studentIndex = this.students.findIndex(student => student.getId() === studentId);
        if (studentIndex !== -1) {
            const student = this.students.splice(studentIndex, 1)[0]; // Xóa học sinh khỏi lớp
            allStudentsS.push(student); // Thêm học sinh lại vào allStudents
        } else {
            console.log(`Student with ID ${studentId} not found in this classroom.`);
        }
    }

    // Phương thức chỉnh sửa thông tin học sinh trong lớp
    editStudent(studentId: number, newName: string): void {
        const student = this.students.find(student => student.getId() === studentId);
        if (student) {
            student['name'] = newName; // Ghi đè thông tin tên mới
        } else {
            console.log(`Student with ID ${studentId} not found in this classroom.`);
        }
    }
}

// Mảng chứa tất cả học sinh
const allStudentsS: StudentS[] = [];

// Tạo 6 thực thể Student
const student1 = new StudentS(1, 'A');
const student2 = new StudentS(2, 'B');
const student3 = new StudentS(3, 'C');
const student4 = new StudentS(4, 'D');
const student5 = new StudentS(5, 'E');
const student6 = new StudentS(6, 'F');

// Thêm các thực thể Student vào mảng allStudents
allStudentsS.push(student1, student2, student3, student4, student5, student6);

// Tạo 2 thực thể Classroom
const classrooms1 = new Classrooms();
const classrooms2 = new Classrooms();

// Thêm học sinh vào lớp học 1
classrooms1.addStudent(1);
classrooms1.addStudent(2);
classrooms1.addStudent(3);

// Thêm học sinh vào lớp học 2
classrooms2.addStudent(4);
classrooms2.addStudent(5);
classrooms2.addStudent(6);

// Hiển thị danh sách học sinh trong mỗi lớp trước khi thay đổi
console.log("Classroom 1 before changes:");
classrooms1.showStudents();

console.log("\nClassroom 2 before changes:");
classrooms2.showStudents();

// Xóa học sinh khỏi lớp học 1 và thêm lại vào allStudents
classrooms1.removeStudent(2);
console.log("\nClassroom 1 after removing student with ID 2:");
classrooms1.showStudents();
console.log("\nAll Students after removing student with ID 2 from Classroom 1:");
console.log(allStudentsS);

// Chỉnh sửa thông tin học sinh trong lớp học 2
classrooms2.editStudent(5, 'Eve Newname');
console.log("\nClassroom 2 after editing student with ID 5:");
classrooms2.showStudents();
