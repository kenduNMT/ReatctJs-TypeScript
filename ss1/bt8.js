function insertArray(arr1, arr2, index) {
    const result = [...arr1];

    result.splice(index, 0, ...arr2);

    return result;
}

const array1 = [1, 2, 'a', 6, 7];
const array2 = ['b', 'hai'];
const position = 2;

const insertedArray = insertArray(array1, array2, position);
console.log("Mảng sau khi chèn:", insertedArray);
