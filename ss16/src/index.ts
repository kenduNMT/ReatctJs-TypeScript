// Mang
let arr1: number[] = [1, 2, 3, 4, 5];

let arr2: Array<number> = [1, 2, 3, 4, 5]; // generic array

let arr3: Array<number> = new Array(1, 2, 3, 4, 5); // generic

// In ra tham so truyen vao chua xic dinh kieu du lieu

const printf = (word: any): void => {
  // ko chat che
    console.log(word);
};
const printfGeneric = <T>(word: T): void => {
    console.log(word);
};

printfGeneric("tam anh");
printfGeneric("100");
printfGeneric("null");

// khoi tao tuple tu 2 tham so truyen vao
const getTuple = <U, V>(a: U, b: V): [U, V] => {
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
const processValues = <U, V>(a: U, b: V): any => {
    if (typeof a === "number" && typeof b === "number") {
    return Number(a) + Number(b);
    } else if (typeof a === "string" && typeof b === "string") {
    return String(a) + String(b);
    } else {
    console.error("Ko the xac dinh kieu.");
    }
};

console.log(processValues(2, 3));
console.log(processValues("Hello, ", "World!"));
processValues(undefined, "3");

// cu phap phuong thuc, ham generic


interface Person {
    weight: number,
    height: number
}

class Student implements Person {
    weight: number;
    height: number;
    name: string
    constructor( weight: number,height: number,name: string) {
        this.weight = weight;
        this.height = height;
        this.name = name;
    }
}

// Tao ham hien thi thong tin cua Person
const printfInfoPerson = <T extends Person>(human:T) => { // bat cu du lieu nao ke ca Person deu thoa man
    console.log(human.height, human.weight);
}

let st = new Student(60,1.6,"tam anh");
printfInfoPerson(st);

// BT
type AnyObject = { [key: string]: any };

const mergeObjects = <T extends AnyObject, U extends AnyObject>(obj1: T, obj2: U): T & U => {
    const result: AnyObject = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
                if (typeof result[key] === 'object' && result[key] !== null && !Array.isArray(result[key])) {
                    result[key] = mergeObjects(result[key], obj2[key]);
                } else {
                    result[key] = mergeObjects({}, obj2[key]);
                }
            } else {
                result[key] = obj2[key];
            }
        }
    }

    return result as T & U;
};

const obj1 = {
    a: 1,
    b: {
        b1: 2,
        b2: [3,4]
    },
    c: {
        c1: 5
    }
};

const obj2 = {
    a: 5,
    b: {
        b1: 6,
        b2: [7,8]
    },
    c: {
        c2: 9
    },
    d: 10
};

function flattenArray<T>(arr: T[]): T[] {
    return arr.reduce<T[]>((acc, item) => {
        if (Array.isArray(item)) {
            return [...acc, ...flattenArray(item)];
        } else {
            return [...acc, item];
        }
    }, []);
}

const nestedArray = [1, [2, [3, [4]], 5], 6, [7, 8], 9];
const flattened = flattenArray(nestedArray);
console.log(flattened);

// Lop // Interface generic

interface ArrayFake <T> {
    data : T[];
    push(item : T): void;
    pop(): T;
}

class ArrayFakeImp1<T> implements ArrayFake<T> {
    data : T[] = [];
    push(item : T): void {
        this.data.push(item);
    }
    pop(): T {
        return this.data.pop() as T;
    }
    toString() {
        return this.data;
    }
}
// Khoi tao
let arrFake : ArrayFake<number> = new ArrayFakeImp1<number>();

arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake);

// Generic with special method : static
class Numbers {
    static so : number = 0;
    constructor(_so : number) {
        Numbers.so = _so;
    }
    static calx2(){
        return Numbers.so*2;
    }
    static sum<T>(a: T,b: T){
        return Number(a)+Number(b);
    }
}

// BT11
class ListNode<T> {
    public value: T;
    public next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(item: T): void {
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

    prepend(item: T): void {
        const newNode = new ListNode(item);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(value: T): void {
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

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

const list = new LinkedList<number>();
list.append(1);
list.prepend(2);
list.prepend(0);
list.append(3);
console.log(list.toArray());
list.delete(1);
console.log(list.toArray());
