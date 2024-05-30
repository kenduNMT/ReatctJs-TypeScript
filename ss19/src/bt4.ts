// Định nghĩa enum cho màu xe
enum MauXe {
    Do = "Đỏ",
    Xanh = "Xanh",
    Den = "Đen",
    Trang = "Trắng"
}

// Class decorator để bổ sung hai thuộc tính soluotmua và ngaysx
function BoSungThongTin<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        soluotmua: number = 0;
        ngaysx: string = new Date().toISOString().split('T')[0]; // Ngày sản xuất là ngày hiện tại
    }
}

// Khai báo class XeOTo
@BoSungThongTin
class XeOTo {
    tenxe: string;
    giaxe: number;
    mauxe: MauXe;

    constructor(tenxe: string, giaxe: number, mauxe: MauXe) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
}

// Tạo đối tượng XeOTo
const xe1 = new XeOTo("Toyota", 50000, MauXe.Do);
console.log(xe1);

const xe2 = new XeOTo("Honda", 40000, MauXe.Xanh);
console.log(xe2);
