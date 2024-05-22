"use strict";
// Định nghĩa lớp Book
class Books {
    constructor(title, author, quantity = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    // Phương thức để lấy tiêu đề sách
    getTitle() {
        return this.title;
    }
    // Phương thức để lấy tên tác giả
    getAuthor() {
        return this.author;
    }
    // Phương thức để lấy số lượng sách
    getQuantity() {
        return this.quantity;
    }
    // Phương thức để tăng số lượng sách
    increaseQuantity() {
        this.quantity += 1;
    }
}
// Định nghĩa lớp Library
class Librarys {
    constructor() {
        this.books = [];
    }
    // Phương thức để thêm sách vào thư viện
    addBook(newBook) {
        const existingBook = this.books.find(book => book.getTitle() === newBook.getTitle() && book.getAuthor() === newBook.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity();
        }
        else {
            this.books.push(newBook);
        }
    }
    // Phương thức để xem danh sách các quyển sách trong thư viện
    listBooks() {
        console.log("Books in Library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Quantity: ${book.getQuantity()}`);
        });
    }
}
// Khởi tạo 5 đối tượng từ lớp Book
const books1 = new Book("1984", "George Orwell");
const books2 = new Book("To Kill a Mockingbird", "Harper Lee");
const books3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const books4 = new Book("Moby Dick", "Herman Melville");
const books5 = new Book("War and Peace", "Leo Tolstoy");
// Khởi tạo 1 đối tượng từ lớp Library
const librarys = new Library();
// Thêm 5 quyển sách vừa tạo vào trong thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// Thêm lại một số sách để tăng số lượng
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
// Xem danh sách các quyển sách trong thư viện
library.listBooks();
