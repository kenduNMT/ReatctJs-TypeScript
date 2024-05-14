function sumArrays(...arrays) {
    const sumArray = arrays.map(array => array.reduce((total, currentValue) => total + currentValue, 0));
    return sumArray;
}

console.log(sumArrays([1, 2], [6, 7, 8], [12, 8]));
