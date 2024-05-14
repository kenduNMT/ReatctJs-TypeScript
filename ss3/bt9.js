function mergeArrays(...arrays) {
    const length = arrays[0].length;
    for (const array of arrays) {
        if (array.length !== length) {
            console.log("Các mảng không có độ dài bằng nhau!");
            return;
        }
    }
    const resultArray = arrays[0].map((_, index) => arrays.map(array => array[index]));
    return resultArray;
}

console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c'], [true, false, true]));
