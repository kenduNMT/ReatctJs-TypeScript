function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

const arr1 = [1, 2, 3, 5, 9];
const arr2 = [4, 6, 7, 8];
console.log(mergeSortedArrays(arr1, arr2));
