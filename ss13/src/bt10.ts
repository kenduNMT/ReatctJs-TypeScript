class Librarys {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    // Phương thức thêm sách vào thư viện
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Phương thức hiển thị tất cả sách trong thư viện
    showBooks(): void {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Stock: ${book.stock}, Status: ${book.status}`);
        });
    }

    // Phương thức đăng ký thành viên cho thư viện
    registerMember(id: number, name: string, contact: string): void {
        const newMember = new Member(id, name, contact, 'active');
        this.members.push(newMember);
    }

    // Phương thức block thành viên trong thư viện
    blockMember(memberId: number): void {
        const member = this.members.find(member => member.id === memberId);
        if (member) {
            member.status = 'blocked';
        } else {
            console.log(`Member with ID ${memberId} not found.`);
        }
    }

    // Phương thức hiển thị tất cả thành viên trong thư viện
    showMembers(): void {
        console.log("Members of the library:");
        this.members.forEach(member => {
            console.log(`ID: ${member.id}, Name: ${member.name}, Contact: ${member.contact}, Status: ${member.status}`);
        });
    }
}

// Tạo thực thể từ lớp Library
const myLibrarys = new Librarys();

// Tạo các thực thể từ lớp Book
const books1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 5, 'available');
const books2 = new Book(2, '1984', 'George Orwell', 3, 'available');
const books3 = new Book(3, 'To Kill a Mockingbird', 'Harper Lee', 4, 'available');

// Sử dụng phương thức addBook để thêm sách vào thư viện
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Hiển thị tất cả sách trong thư viện
myLibrary.showBooks();

// Đăng ký các thành viên cho thư viện
myLibrarys.registerMember(1, 'John Doe', 'john.doe@example.com');
myLibrarys.registerMember(2, 'Jane Smith', 'jane.smith@example.com');
myLibrarys.registerMember(3, 'Alice Johnson', 'alice.johnson@example.com');

// Hiển thị tất cả thành viên trong thư viện
console.log("\nMembers before blocking:");
myLibrarys.showMembers();

// Block một thành viên
myLibrarys.blockMember(2);

// Hiển thị lại tất cả thành viên sau khi block một thành viên
console.log("\nMembers after blocking member with ID 2:");
myLibrarys.showMembers();
