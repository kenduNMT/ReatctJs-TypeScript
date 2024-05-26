"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    // Phương thức thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    // Phương thức hiển thị tất cả sách trong thư viện
    showBooks() {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Stock: ${book.stock}, Status: ${book.status}`);
        });
    }
}
// Tạo thực thể từ lớp Library
const myLibrary = new Library();
// Tạo các thực thể từ lớp Book
const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 5, 'available');
const book2 = new Book(2, '1984', 'George Orwell', 3, 'available');
const book3 = new Book(3, 'To Kill a Mockingbird', 'Harper Lee', 4, 'available');
// Sử dụng phương thức addBook để thêm sách vào thư viện
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
// Sử dụng phương thức showBooks để hiển thị tất cả sách trong thư viện
myLibrary.showBooks();
