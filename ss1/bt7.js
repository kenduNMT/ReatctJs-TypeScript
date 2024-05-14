function findMaxLessThanOrEqualTo(arr, num) {
    const filteredArr = arr.filter(element => element <= num);
    
    if (filteredArr.length === 0) {
        return null;
    }

    const max = Math.max(...filteredArr);
    return max;
}

// Ví dụ sử dụng hàm
const numbers = [10, 20, 30, 40, 50];
const targetNumber = 35;
const result = findMaxLessThanOrEqualTo(numbers, targetNumber);
console.log("Số lớn nhất trong mảng nhỏ hơn hoặc bằng", targetNumber, "là:", result);
