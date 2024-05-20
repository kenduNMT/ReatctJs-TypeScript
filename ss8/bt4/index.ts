function squareInput(input: number | number[]): number | number[] {
    if (typeof input === "number") {
        return input * input;
    } else if (Array.isArray(input)) {
        return input.map(num => num * num);
    } else {
        throw new Error("Invalid input type");
    }
}

// Ví dụ cách sử dụng hàm squareInput
const singleNumber = 5;
const numberArray = [1, 2, 3, 4];

console.log(squareInput(singleNumber)); // Output: 25
console.log(squareInput(numberArray));  // Output: [1, 4, 9, 16]
