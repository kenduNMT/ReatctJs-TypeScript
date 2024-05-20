function printStrings(input: string | string[]): void {
    if (typeof input === "string") {
        console.log(input);
    } else if (Array.isArray(input)) {
        input.forEach(str => console.log(str));
    } else {
        throw new Error("Invalid input type");
    }
}

// Ví dụ cách sử dụng hàm printStrings
const singleString = "Hello, world!";
const stringArray = ["Hello", "world", "!"];

printStrings(singleString); // Output: Hello, world!
printStrings(stringArray);  // Output: Hello \n world \n !
