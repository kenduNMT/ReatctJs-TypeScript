type Person = {
    name: string;
    age: number;
    address: object;
};

function validatePerson(obj: any): obj is Person {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.name === 'string' &&
        typeof obj.age === 'number' &&
        typeof obj.address === 'object'
    );
}

// Ví dụ cách sử dụng hàm validatePerson
const validPerson = {
    name: "John Doe",
    age: 30,
    address: { street: "123 Main St", city: "Anytown" }
};

const invalidPerson = {
    name: "Jane Doe",
    age: "30", // age không phải là number
    address: "123 Main St" // address không phải là object
};

console.log(validatePerson(validPerson)); // Output: true
console.log(validatePerson(invalidPerson)); // Output: false
