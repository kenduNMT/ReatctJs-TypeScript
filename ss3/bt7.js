function mergeObjects(...objects) {
    let mergedObject = {};

    objects.forEach(obj => {
        Object.keys(obj).forEach(key => {
            mergedObject[key] = obj[key];
        });
    });
    return mergedObject;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

console.log(mergeObjects(obj1, obj2, obj3));
