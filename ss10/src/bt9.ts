// Định nghĩa lớp Book
class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    // Phương thức để lấy tiêu đề sách
    public getTitle(): string {
        return this.title;
    }

    // Phương thức để lấy tên tác giả
    public getAuthor(): string {
        return this.author;
    }
}

// Định nghĩa lớp Library
class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    // Phương thức để thêm sách vào thư viện
    public addBook(book: Book): void {
        this.books.push(book);
    }

    // Phương thức để xem danh sách các quyển sách trong thư viện
    public listBooks(): void {
        console.log("Books in Library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
        });
    }
}

// Khởi tạo 5 đối tượng từ lớp Book
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book4 = new Book("Moby Dick", "Herman Melville");
const book5 = new Book("War and Peace", "Leo Tolstoy");

// Khởi tạo 1 đối tượng từ lớp Library
const library = new Library();

// Thêm 5 quyển sách vừa tạo vào trong thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// Xem danh sách các quyển sách trong thư viện
library.listBooks();
