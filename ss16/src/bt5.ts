// Hàm generic để in giá trị của biến
function printValue<T>(variableName: string, value: T): void {
    console.log(`${variableName}:`, value);
}

// Khai báo các biến
let undefinedVariable: undefined;
let numberVariable: number = 42;
let inferredVariable = "Hello, TypeScript!";

// Sử dụng hàm generic để in các biến
printValue("undefinedVariable", undefinedVariable);
printValue("numberVariable", numberVariable);
printValue("inferredVariable", inferredVariable);
