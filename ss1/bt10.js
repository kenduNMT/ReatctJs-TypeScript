function filterArray1(arr1, arr2) {
    const filteredValues = [];

    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i];
        if (arr2.indexOf(value) === -1) {
            filteredValues.push(value);
        } else {
            arr1.splice(i, 1);
            i--;
        }
    }

    return filteredValues;
}

const arr1 = [1, 2, '1', 3, 'a'];
const arr2 = [1, 2, 3, 4];

const filteredValues = filterArray1(arr1, arr2);
console.log("Mảng số 1 sau khi lọc:", arr1);
console.log("Kết quả trả về của hàm:", filteredValues);
