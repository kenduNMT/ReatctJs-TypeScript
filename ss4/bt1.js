function sum(arr) {
    let total = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    return total;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(numbers));
