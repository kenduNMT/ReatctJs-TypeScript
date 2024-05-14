const integerNumber = 10;
const array = [1, 2, 3];

// Lỗi: Assignment to constant variable
integerNumber = 20;

array.push(4);

console.log(integerNumber); // Không in được vì có lỗi
console.log(array); // In ra [1, 2, 3, 4]
