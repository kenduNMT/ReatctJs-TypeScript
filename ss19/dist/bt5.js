"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Định nghĩa enum cho màu xe
var MauXes;
(function (MauXes) {
    MauXes["Do"] = "\u0110\u1ECF";
    MauXes["Xanh"] = "Xanh";
    MauXes["Den"] = "\u0110en";
    MauXes["Trang"] = "Tr\u1EAFng";
})(MauXes || (MauXes = {}));
// Class decorator để bổ sung hai thuộc tính soluotmua và ngaysx
function BoSungThongTins(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.soluotmua = 0;
            this.ngaysx = new Date().toISOString().split('T')[0]; // Ngày sản xuất là ngày hiện tại
        }
    };
}
// Khai báo class XeOTo
let XeOTos = class XeOTos {
    constructor(tenxe, giaxe, mauxe) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
};
XeOTos = __decorate([
    BoSungThongTin
], XeOTos);
// Tạo đối tượng XeOTo
const xe01 = new XeOTos("Toyota", 50000, MauXes.Do);
console.log(xe1);
const xe02 = new XeOTos("Honda", 40000, MauXes.Xanh);
console.log(xe2);
