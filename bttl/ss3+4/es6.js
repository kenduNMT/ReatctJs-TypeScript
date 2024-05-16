/*
    Tổng quan về ES6
    1. Từ khóa let, const
    2. Template string
    3. Arrow function
    4. Destructuring
    5. Rest Parameter
    6. Spread operator
    7. Vòng lặp for/of
*/

// 1.let,const
// var number = 10;
// Tu khoa let
//(*) Pham vi truy cap : trong block scope (dau {} vi dau: if, else, function, for)

// pham vi truy cap cua var la global ngoai tru function
// pham vi let la` local
// if (true) {
//     var check = true;
// }
// console.log(check);

// function check() {
//     var isPrime = true;
// }
// check() //loi~
// console.log(isPrime);

//(*) khai niem hoisting - gan gia tri truoc khai bao
// a = 10; //gan gia tri
// var a; //khai bao
// console.log(a);

// const : khai bao hang so - ko cho phep gan lai gia tri cho bien
// Note: khi khai bao const phai gan gia tri luon
// const PI = 3.14;

// 2. Template string
// Cho phep khai bao va chinh sua chuoi 1 cach linh hoat
let studentName = "Hunghx"
let className = "PTIT-HCM-1"
let str = `Hello ${studentName} vao lop ${className}`;
console.log(str);

// 3. Arrow function - Ham mui ten
// const functionName = (params) => {statements}
// Important: params(tham so) va return(gia tri tra ve)

// BT: tao ham tinh tong 2 so
// let sum = (a,b)=> {
//     return a+b
// }
// console.log(sum(2,5));

// Rut gon
const print = a => Math.pow(a,2) // neu chi co 1 tham so thi ko can ()
// neu khoi lenh chi co 1 cau lenh return thi co the bo blockscopr va tu khoa return
console.log(print(10));

// Destructuring - pha vo cau truc ap dung cho : array va object
//array
let arrInterger = [1,2,3,4,5];
let [c,d] = arrInterger;
console.log(c,d);
//object
let student = {
    id:1,
    name: "khanh",
    age:18
}

let {name,age} = student;
console.log(name,age);

// Rest paremeter - tham so con lai
// BT : tinh tong n so chua biet 
const sumN = (...param)=> {
    // param la 1 array
    return param.reduce((temp,e)=> temp+e , 0);
}
console.log(sumN(1,2,3,4,5));
// Note : ket hop voi destructuring
let [a,b,...param] = arrInterger;
console.log(param);

// 6. Spread operator: nhom lai thanh cau truc : array va object
let newArray = [1000,2000,...arrInterger,100,200];
console.log(newArray);

let arrayInt = [1,2,3,4,5];
let insertArray = [100,99,98];
// index = 2
let arrA = arrayInt.splice(0,2);
let arrB = arrayInt.slice(2,arrayInt.length)
console.log(arrA,arrB);

let result = [...arrA,...insertArray,...arrB]
console.log(result);

// them hoac edit thuoc tinh object
// student = {...student,name:"nam ok"}
student = {...student,address:"nam ok"}
console.log(student);

// 7. Vòng lặp for/of : duyet phan tu trong mang
for(let key of result) {
    console.log(key);// duyet gia tri
}
// ko cho phep duyet doi tuong object

// Use for in
for (const key in student) {
    console.log(key);
    console.log(student[key]);
}

// let obj = {
//     "mã sinh viên" :1,
//     "tên sinh viên" : "hùng",
//     "tuổi": 18
// }
// console.log(obj["mã sinh viên"]);


//Bt Rest
// function printArguments(...args) {
//     args.forEach(arg => console.log(arg));
// }
// printArguments(1, 'hello', true, { key: 'value' }, [1, 2, 3]);

// BT tren lop
let arr = [];

let form = document.getElementById("form");
form.addEventListener('submit',function(e) {
    e.preventDefault();
    let valueInput = +document.getElementById("input").value;
    console.log(valueInput);
    arr = [...arr,valueInput];
    let sum = arr.reduce((temp,a)=>temp+a,0);
    document.getElementById("result").innerText = sum;
    document.getElementById("arr").innerText = arr;
    document.getElementById("input").value = "";
})