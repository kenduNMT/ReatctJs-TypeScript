class Members {
    id: number;
    name: string;
    contact: string;
    books: LendedBook[];
    status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }

    // Phương thức mượn sách
    borrowBook(library: Library, bookId: number): void {
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
}

// Tạo thực thể từ lớp Library và Member
const myLibraryS = new Library();
const member = new Members(1, 'John Doe', 'john.doe@example.com', 'active');

// Thêm sách vào thư viện
myLibrary.addBook(new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 5, 'available'));
myLibrary.addBook(new Book(2, '1984', 'George Orwell', 0, 'unavailable'));

// Mượn sách
member.borrowBook(myLibrary, 1); // Mượn sách thành công
member.borrowBook(myLibrary, 2); // Không thể mượn sách do hết hoặc không có sẵn
