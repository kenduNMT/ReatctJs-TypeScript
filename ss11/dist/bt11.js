"use strict";
class ShopItem {
    constructor(id, name, price, isAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }
    getInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Available: ${this.isAvailable ? 'Yes' : 'No'}`);
    }
}
class LendingItem extends ShopItem {
    constructor(id, name, price, stock) {
        super(id, name, price, stock > 0);
        this.customerNames = [];
        this.stock = stock;
    }
    lendItem(customerName) {
        if (this.stock > 0) {
            this.customerNames.push(customerName);
            this.stock--;
            if (this.stock === 0) {
                this.isAvailable = false;
                console.log(`${this.name} is no longer available for lending.`);
            }
        }
        else {
            console.log(`${this.name} is out of stock.`);
        }
    }
    getInfo() {
        super.getInfo();
        console.log(`Customer Names: ${this.customerNames.join(', ')}`);
        console.log(`Stock: ${this.stock}`);
    }
}
// Tạo thực thể từ lớp LendingItem
const lendingItem = new LendingItem(1, "Book", 10, 3);
// Cho thuê sản phẩm và kiểm tra thông tin
lendingItem.lendItem("Alice");
lendingItem.lendItem("Bob");
// Kiểm tra thông tin sau khi cho thuê
console.log("After lending:");
lendingItem.getInfo();
