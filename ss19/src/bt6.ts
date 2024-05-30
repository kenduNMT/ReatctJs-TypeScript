// Method decorator để kiểm tra giá trị diem nằm trong khoảng từ 0 đến 10
function validateDiem(min: number, max: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(this: any, ...args: any[]) {
            if (this.diem < min || this.diem > max) {
                throw new Error(`Diem must be between ${min} and ${max}`);
            }
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

// Khai báo class SinhVienThi
class SinhVienThi {
    diem: number;

    constructor(diem: number) {
        this.diem = diem;
    }

    @validateDiem(0, 10)
    hienketqua() {
        console.log(`Kết quả thi của bạn là: ${this.diem}`);
    }
}

// Tạo đối tượng SinhVienThi và gọi hàm hienketqua
try {
    const sv1 = new SinhVienThi(8);
    sv1.hienketqua();
} catch (error) {
    console.error((error as Error).message);
}

try {
    const sv2 = new SinhVienThi(12);
    sv2.hienketqua();
} catch (error) {
    console.error((error as Error).message);
}

try {
    const sv3 = new SinhVienThi(-3);
    sv3.hienketqua(); 
} catch (error) {
    console.error((error as Error).message);
}
