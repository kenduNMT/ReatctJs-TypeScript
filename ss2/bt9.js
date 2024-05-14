function totalPrice(carts) {
    return carts.reduce((total, item) => total + item.price * item.quantity, 0);
}
// function totalPrice(carts) {
//     let total = 0;
//     for (let i = 0; i < carts.length; i++) {
//         total += carts[i].price * carts[i].quantity;
//     }
//     return total;
// }
const carts = [
    {
        product_name: "Cam",
        price: 20000,
        quantity: 5,
    },
    {
        product_name: "Táo",
        price: 30000,
        quantity: 3,
    },
    {
        product_name: "Xoài",
        price: 40000,
        quantity: 2,
    },
];

console.log(totalPrice(carts));
