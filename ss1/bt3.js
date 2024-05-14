const array = [1,2,'z',true,-1,-3];

function filterPositiveIntegers(arr) {
    return arr.filter(element => Number.isInteger(element) && element > 0);
}

const positiveIntegers = filterPositiveIntegers(array);

console.log(positiveIntegers);
