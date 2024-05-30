// Định nghĩa enum cho màu xe
enum MauXes {
    Do = "Đỏ",
    Xanh = "Xanh",
    Den = "Đen",
    Trang = "Trắng"
}

// Class decorator để bổ sung hai thuộc tính soluotmua và ngaysx
function BoSungThongTins<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        soluotmua: number = 0;
        ngaysx: string = new Date().toISOString().split('T')[0]; // Ngày sản xuất là ngày hiện tại
    }
}

// Khai báo class XeOTo
@BoSungThongTin
class XeOTos {
    tenxe: string;
    giaxe: number;
    mauxe: MauXes;

    constructor(tenxe: string, giaxe: number, mauxe: MauXes) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
}

// Tạo đối tượng XeOTo
const xe01 = new XeOTos("Toyota", 50000, MauXes.Do);
console.log(xe1);

const xe02 = new XeOTos("Honda", 40000, MauXes.Xanh);
console.log(xe2);
