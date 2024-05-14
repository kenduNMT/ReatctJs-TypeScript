const books = [
    { id: 1, name: "Book 1" },
    { id: 2, name: "Book 2" },
    { id: 3, name: "Book 3" },
    { id: 4, name: "Book 4" }
];

function findBookById(bookArray, id) {
    const foundBook = bookArray.find(book => book.id === id);
    if (foundBook) {
        console.log(`ID: ${foundBook.id}, Name: ${foundBook.name}`);
    } else {
        console.log("Không có kết quả tìm kiếm.");
    }
}

findBookById(books, 3);
findBookById(books, 5);
