for(let i = 1; i<=5; i++) {
    console.log(`${i} co binh phuong la ${Math.pow(i,2)}`);
}

//callback function
function printNumber(number) {
    console.log(`${number} co binh phuong la ${Math.pow(number,2)}`);
}
// printNumber(8)
let arrs = [1,2,3,4,5];
arrs.forEach(printNumber);
// forEach
let arr = [0,0,0,0,0,0,0,0,0,0]
let numbersS = []
arr.forEach(()=> {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    numbersS.push(randomNum)
})
console.log(numbersS);
numbersS.forEach((num)=> {
    console.log(num);
})

// map
let numbers = [1,3,5,7,9];

let newarrNumber = numbers.map((element,index)=> {
    return Math.pow(element,3);
})
console.log(newarrNumber);

// filter
let arrFilter = numbers.filter((number,arrFilter)=> number%3 == 0)
console.log(arrFilter);

// Reduce
let sum = numbers.reduce((temp,element)=>temp+element)
console.log(sum);

let multi = numbers.reduce((temp,element)=>temp*element)
console.log(multi);

// find/findIndex
let cxc = numbers.find((element)=>element%5==0)
console.log(cxc);

let xxc = numbers.findIndex((element)=>element%5==0)
console.log(xxc);
// BT 1: In ra danh sach ten sinh vien (dung forEach, map)
let students = [
    {
        id: 1,
        name:"Nguyen Van A",
        age: 18
    },
    {
        id: 2,
        name:"Nguyen Van B",
        age: 18
    },
    {
        id: 3,
        name:"Nguyen Van C",
        age: 18
    },
    {
        id: 4,
        name:"Nguyen Van D",
        age: 18
    },
]
// dung forEach
students.forEach((element)=> console.log(element.name))
// dung map
let newDsStudents = console.log(students.map(element=>element.name));
