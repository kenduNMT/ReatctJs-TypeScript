"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    // Ghi đè phương thức getDescription để in thêm thông tin về brand
    getDescription() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
// Khởi tạo đối tượng từ lớp Electronics và in ra thông tin đối tượng vừa khởi tạo
const electronicProduct = new Electronics('Smartphone', 999, 'TechBrand');
electronicProduct.getDescription();
