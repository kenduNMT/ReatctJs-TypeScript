class ShopItem {
    protected id: number;
    protected name: string;
    protected price: number;
    protected isAvailable: boolean;

    constructor(id: number, name: string, price: number, isAvailable: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }

    public getInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Available: ${this.isAvailable ? 'Yes' : 'No'}`);
    }
}

class LendingItem extends ShopItem {
    private customerNames: string[];
    private stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price, stock > 0);
        this.customerNames = [];
        this.stock = stock;
    }

    public lendItem(customerName: string): void {
        if (this.stock > 0) {
            this.customerNames.push(customerName);
            this.stock--;
            if (this.stock === 0) {
                this.isAvailable = false;
                console.log(`${this.name} is no longer available for lending.`);
            }
        } else {
            console.log(`${this.name} is out of stock.`);
        }
    }

    public getInfo(): void {
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
