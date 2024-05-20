function parseInput(input: string): number | boolean | string | null | undefined {
    switch (input) {
        case "number":
            return 0; // hoặc một số bất kỳ, ở đây chọn 0 làm mặc định
        case "boolean":
            return true; // hoặc false, ở đây chọn true làm mặc định
        case "string":
            return "example"; // hoặc bất kỳ chuỗi nào, ở đây chọn "example" làm mặc định
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            throw new Error("Invalid input type");
    }
}

// Ví dụ cách sử dụng hàm parseInput
console.log(parseInput("number"));     // Output: 0
console.log(parseInput("boolean"));    // Output: true
console.log(parseInput("string"));     // Output: "example"
console.log(parseInput("null"));       // Output: null
console.log(parseInput("undefined"));  // Output: undefined
