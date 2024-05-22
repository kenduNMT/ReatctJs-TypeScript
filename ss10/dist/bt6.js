"use strict";
// Định nghĩa lớp Song
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    // Phương thức để truy cập tên bài hát
    getName() {
        return this.name;
    }
    // Phương thức để thay đổi tên bài hát
    setName(newName) {
        this.name = newName;
    }
    // Phương thức để truy cập độ dài bài hát
    getLength() {
        return this.length;
    }
    // Phương thức để thay đổi độ dài bài hát
    setLength(newLength) {
        this.length = newLength;
    }
}
// Tạo ra một thực thể từ lớp Song
const song = new Song(1, "Imagine", 183);
// Truy cập và in ra các thông tin của bài hát
console.log(`Song ID: ${song.id}`);
console.log(`Song Name: ${song.getName()}`);
console.log(`Song Length: ${song.getLength()} seconds`);
// Thay đổi tên và độ dài bài hát
song.setName("Imagine - Remastered");
song.setLength(187);
// In ra các thông tin đã được thay đổi của bài hát
console.log(`Updated Song Name: ${song.getName()}`);
console.log(`Updated Song Length: ${song.getLength()} seconds`);
