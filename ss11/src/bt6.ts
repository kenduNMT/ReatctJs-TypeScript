class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription(): void {
        console.log(`Product Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    // Ghi đè phương thức getDescription để in thêm thông tin về brand
    public override getDescription(): void {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

// Khởi tạo đối tượng từ lớp Electronics và in ra thông tin đối tượng vừa khởi tạo
const electronicProduct = new Electronics('Smartphone', 999, 'TechBrand');
electronicProduct.getDescription();
