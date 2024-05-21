"use strict";
function getShippingCost(country) {
    switch (country) {
        case "VN":
            return 10000;
        case "US":
            return 20000;
        case "UK":
            return 30000;
        default:
            // Do chúng ta đã giới hạn loại quốc gia bằng Literal Types, trường hợp default sẽ không bao giờ xảy ra.
            throw new Error("Unsupported country");
    }
}
const costVN = getShippingCost("VN");
const costUS = getShippingCost("US");
const costUK = getShippingCost("UK");
console.log(costVN);
console.log(costUS);
console.log(costUK);
