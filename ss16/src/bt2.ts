function swap<T>(array: T[], index1: number, index2: number): T[] {
    // Kiểm tra xem các chỉ mục có hợp lệ không
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        throw new Error("Chỉ mục không hợp lệ");
    }

    // Thực hiện hoán đổi các phần tử
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

// Sử dụng với kiểu number
let numberArray = [1, 2, 3, 4, 5];
console.log(swap(numberArray, 1, 3));  // Output: [1, 4, 3, 2, 5]

// Sử dụng với kiểu string
let stringArray = ["a", "b", "c", "d"];
console.log(swap(stringArray, 0, 2));  // Output: ["c", "b", "a", "d"]

// Sử dụng với kiểu boolean
let booleanArray = [true, false, true, false];
console.log(swap(booleanArray, 2, 3));  // Output: [true, false, false, true]

// Sử dụng với kiểu object
let objectArray = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
console.log(swap(objectArray, 1, 2));  // Output: [{name: "Alice"}, {name: "Charlie"}, {name: "Bob"}]
