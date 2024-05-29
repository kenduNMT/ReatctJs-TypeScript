"use strict";
// Mang
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5]; // generic array
let arr3 = new Array(1, 2, 3, 4, 5); // generic
// In ra tham so truyen vao chua xic dinh kieu du lieu
const printf = (word) => {
    // ko chat che
    console.log(word);
};
const printfGeneric = (word) => {
    console.log(word);
};
printfGeneric("tam anh");
printfGeneric("100");
printfGeneric("null");
// khoi tao tuple tu 2 tham so truyen vao
const getTuple = (a, b) => {
    return [a, b];
};
console.log(getTuple(1, "nam"));
console.log(getTuple(undefined, "nu"));
console.log(getTuple(true, null));
// Cax qui tac co ban ve dat ten:
// T : Type
// E : Element
// K : Key
// V : Value
// N : Number
// BT
const processValues = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return Number(a) + Number(b);
    }
    else if (typeof a === "string" && typeof b === "string") {
        return String(a) + String(b);
    }
    else {
        console.error("Ko the xac dinh kieu.");
    }
};
console.log(processValues(2, 3));
console.log(processValues("Hello, ", "World!"));
processValues(undefined, "3");
class Student {
    constructor(weight, height, name) {
        this.weight = weight;
        this.height = height;
        this.name = name;
    }
}
// Tao ham hien thi thong tin cua Person
const printfInfoPerson = (human) => {
    console.log(human.height, human.weight);
};
let st = new Student(60, 1.6, "tam anh");
printfInfoPerson(st);
const mergeObjects = (obj1, obj2) => {
    const result = Object.assign({}, obj1);
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
                if (typeof result[key] === 'object' && result[key] !== null && !Array.isArray(result[key])) {
                    result[key] = mergeObjects(result[key], obj2[key]);
                }
                else {
                    result[key] = mergeObjects({}, obj2[key]);
                }
            }
            else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
};
const obj1 = {
    a: 1,
    b: {
        b1: 2,
        b2: [3, 4]
    },
    c: {
        c1: 5
    }
};
const obj2 = {
    a: 5,
    b: {
        b1: 6,
        b2: [7, 8]
    },
    c: {
        c2: 9
    },
    d: 10
};
function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return [...acc, ...flattenArray(item)];
        }
        else {
            return [...acc, item];
        }
    }, []);
}
const nestedArray = [1, [2, [3, [4]], 5], 6, [7, 8], 9];
const flattened = flattenArray(nestedArray);
console.log(flattened);
class ArrayFakeImp1 {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
    toString() {
        return this.data;
    }
}
// Khoi tao
let arrFake = new ArrayFakeImp1();
arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake);
// Generic with special method : static
class Numbers {
    constructor(_so) {
        Numbers.so = _so;
    }
    static calx2() {
        return Numbers.so * 2;
    }
    static sum(a, b) {
        return Number(a) + Number(b);
    }
}
Numbers.so = 0;
// BT11
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(item) {
        const newNode = new ListNode(item);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    prepend(item) {
        const newNode = new ListNode(item);
        newNode.next = this.head;
        this.head = newNode;
    }
    delete(value) {
        if (!this.head) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    toArray() {
        const result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}
const list = new LinkedList();
list.append(1);
list.prepend(2);
list.prepend(0);
list.append(3);
console.log(list.toArray());
list.delete(1);
console.log(list.toArray());
