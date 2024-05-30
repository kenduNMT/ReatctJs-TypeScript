"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Method decorator để kiểm tra giá trị diem nằm trong khoảng từ 0 đến 10
function validateDiem(min, max) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
    constructor(diem) {
        this.diem = diem;
    }
    hienketqua() {
        console.log(`Kết quả thi của bạn là: ${this.diem}`);
    }
}
__decorate([
    validateDiem(0, 10)
], SinhVienThi.prototype, "hienketqua", null);
// Tạo đối tượng SinhVienThi và gọi hàm hienketqua
try {
    const sv1 = new SinhVienThi(8);
    sv1.hienketqua();
}
catch (error) {
    console.error(error.message);
}
try {
    const sv2 = new SinhVienThi(12);
    sv2.hienketqua();
}
catch (error) {
    console.error(error.message);
}
try {
    const sv3 = new SinhVienThi(-3);
    sv3.hienketqua();
}
catch (error) {
    console.error(error.message);
}
