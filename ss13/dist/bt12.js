"use strict";
class MemberS {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }
    // Phương thức mượn sách
    borrowBook(library, bookId) {
        // Kiểm tra xem thành viên đã mượn sách trước đó chưa
        if (this.books.length > 0) {
            console.log("You have borrowed a book. Please return it before borrowing another one.");
            return;
        }
        // Tìm sách trong thư viện dựa trên ID
        const book = library.books.find(book => book.id === bookId);
        // Nếu không tìm thấy sách hoặc sách không có sẵn, in ra thông báo và kết thúc phương thức
        if (!book || book.stock === 0 || book.status === 'unavailable') {
            console.log("Sorry, the book is not available for borrowing.");
            return;
        }
        // Giảm số lượng sách trong thư viện và tạo đối tượng LendedBook
        book.stock--;
        const lendedBook = new LendedBook(this.id, bookId, new Date());
        // Thêm sách vào mảng sách của thành viên
        this.books.push(lendedBook);
        console.log(`Book with ID ${bookId} has been borrowed successfully.`);
    }
    // Phương thức trả sách
    returnBook(library, bookId) {
        // Tìm sách trong mảng sách đã mượn của thành viên
        const index = this.books.findIndex(book => book.bookId === bookId);
        // Nếu không tìm thấy sách, in ra thông báo và kết thúc phương thức
        if (index === -1) {
            console.log("You have not borrowed this book.");
            return;
        }
        // Tăng số lượng sách trong thư viện và xóa sách khỏi mảng sách đã mượn của thành viên
        const book = library.books.find(book => book.id === bookId);
        if (book) {
            book.stock++;
        }
        this.books.splice(index, 1);
        console.log(`Book with ID ${bookId} has been returned successfully.`);
    }
}
