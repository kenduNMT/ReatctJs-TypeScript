const employees = [
    {
        name: "Nguyễn Văn A",
        age: 21,
    },
    {
        name: "Nguyễn Văn B",
        age: 30,
    },
    {
        name: "Nguyễn Văn C",
        age: 19,
    }
];

function sortEmployee(arr, sortOrder) {
    if (sortOrder === "Increase") {
        arr.sort((a, b) => a.age - b.age);
    } else if (sortOrder === "Decrease") {
        arr.sort((a, b) => b.age - a.age);
    }
    return arr;
}

console.log("Sort by Increase:");
console.log(sortEmployee(employees, "Increase"));

// console.log("Sort by Decrease:");
// console.log(sortEmployee(employees, "Decrease"));
