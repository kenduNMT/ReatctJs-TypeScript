let phoneBooks = [];

class Contact {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

function addContact(name, phoneNumber, email) {
    let contact = new Contact(name, phoneNumber, email);
    phoneBooks = [...phoneBooks, contact];
}

function displayContacts() {
    if (phoneBooks.length === 0) {
        console.log("Danh bạ trống.");
        return;
    }

    console.log("Danh bạ điện thoại:");
    phoneBooks.forEach((contact, index) => {
        console.log(`${index + 1}. Tên: ${contact.name}, Số Điện Thoại: ${contact.phoneNumber}, Email: ${contact.email}`);
    });
}

addContact("Nguyễn Văn A", "0123456789", "nguyenvana@example.com");
addContact("Trần Thị B", "0987654321", "tranthib@example.com");

displayContacts();