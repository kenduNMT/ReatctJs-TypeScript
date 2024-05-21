// Type Tuple : Mảng cố định 

let arrNotChangeLength: [number,string,boolean];
arrNotChangeLength = [1,"nam",true];

console.log(arrNotChangeLength);
// console.log("3",arrNotChangeLength[3]);

// option readonly 
let number = [10]; //khai báo ngầm định - literals 

// Type Allias - kiểu đối tượng
// từ khóa : type
type UserType = {
    readonly id:number, // chỉ đọc
    name:string,
    age:number
}

// từ khóa : interface
interface UserInterface {
    id:number,
    name:string,
    age:number
}

// từ khóa : class
class UserClass {
    id:number
    name:string
    age:number
    constructor(id:number,name:string,age:number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

let user1: UserType = {
    id:1,
    name:"hùng",
    age:20
}

// Type guard
// typeof
// Ínstance of (kiểm tra kiểu dữ liệu của 1 instance (đối tượng) có phải interface hoặc class hay ko)
let userClass :any = new UserClass(1,"khánh",20);
let userFake :any = {
    id:1,
    name:"hùng",
    age:20
}
let userCopy = userClass; // gán địa chỉ tham chiếu

userClass.name = "tâm anh"
console.log(userClass);
console.log(userCopy);

// function printName(user:UserClass) :void {
//     console.log(user.name)
// }

// Toán tử in : kiểm tra xem 1 thuộc tính có tồn tại trong 1 object hay ko

console.log("id" in userClass);
console.log("sex" in userClass);

if("name" in userClass) {
    console.log(userClass.name);
}

// Type casting
// Toán tử as : như là
let myFunction = (a:number|string, b:number|string) : string|number => {
    if(typeof a==="number" && typeof b==="number") {
        return a+b;
    }else {
        return String(a) + String(b);
    }
}

// let result = myFunction(1,2) as string;
// console.log(typeof result);

// Sử dụng <> : phổ biến hơn

let result = <string> myFunction(1,2);
// console.log(typeof result)

// Toán tử Optional chaining "?."
// let username = userFake?.name; // Nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
//nếu ko trả về undefined
// console.log("username:", username);

//Toán tử Nullish coleting "??"
let fullName = user1.name??"Tên mặc định";
console.log("fullName:", fullName);

// BT7
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
// enum Method {
//     GET,POST,PUT,DELETE
// }
let method: HTTPMethod;

method = "GET";
method = "POST";
method = "PUT";
method = "DELETE";

// method = "PATCH"; // Lỗi: Type '"PATCH"' is not assignable to type 'HTTPMethod'.

// BT8
// Định nghĩa Tuple Type cho mặt hàng
type Item = [string, number, number];

let item: Item = ["Apple", 2, 5];

let total = item[1] * item[2];
console.log(`Tổng giá tiền cho ${item[0]}: ${total} VND`);

// BT 

interface Task {
    text: string;
    completed: boolean;
}

let tasks: Task[] = [];

let addTask = (): void => {
    const taskInput = document.getElementById('newTask') as HTMLInputElement;
    const task = taskInput.value.trim();
    if (task) {
        tasks = [...tasks, { text: task, completed: false }];
        taskInput.value = '';
        renderTasks();
    }
};

let deleteTask = (index: number): void => {
    tasks.splice(index, 1);
    renderTasks();
};

let toggleCompletion = (index: number): void => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

let filterTasks = (status: 'all' | 'active' | 'completed'): void => {
    const filteredTasks = tasks.filter(task => {
        return status === 'all' || (status === 'active' && !task.completed) || (status === 'completed' && task.completed);
    });
    renderTasks(filteredTasks);
};

let renderTasks = (filteredTasks: Task[] = tasks): void => {
    const taskList = document.getElementById('taskList') as HTMLElement;
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'completed list-group-item' : 'list-group-item';
        taskItem.innerHTML = `
            ${task.text}
            <button class="btn btn-outline-primary btn-sm float-right" onclick="toggleCompletion(${index})">Toggle</button>
            <button class="btn btn-outline-danger btn-sm float-right mr-2" onclick="deleteTask(${index})">X</button>
        `;
        taskList.appendChild(taskItem);
    });
};

document.getElementById('newTask')?.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        addTask();
    }
});