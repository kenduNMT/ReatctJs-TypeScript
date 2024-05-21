"use strict";
// Type Tuple : Mảng cố định 
var _a, _b;
let arrNotChangeLength;
arrNotChangeLength = [1, "nam", true];
console.log(arrNotChangeLength);
// console.log("3",arrNotChangeLength[3]);
// option readonly 
let number = [10]; //khai báo ngầm định - literals 
// từ khóa : class
class UserClass {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
let user1 = {
    id: 1,
    name: "hùng",
    age: 20
};
// Type guard
// typeof
// Ínstance of (kiểm tra kiểu dữ liệu của 1 instance (đối tượng) có phải interface hoặc class hay ko)
let userClass = new UserClass(1, "khánh", 20);
let userFake = {
    id: 1,
    name: "hùng",
    age: 20
};
let userCopy = userClass; // gán địa chỉ tham chiếu
userClass.name = "tâm anh";
console.log(userClass);
console.log(userCopy);
// function printName(user:UserClass) :void {
//     console.log(user.name)
// }
// Toán tử in : kiểm tra xem 1 thuộc tính có tồn tại trong 1 object hay ko
console.log("id" in userClass);
console.log("sex" in userClass);
if ("name" in userClass) {
    console.log(userClass.name);
}
// Type casting
// Toán tử as : như là
let myFunction = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
};
// let result = myFunction(1,2) as string;
// console.log(typeof result);
// Sử dụng <> : phổ biến hơn
let result = myFunction(1, 2);
// console.log(typeof result)
// Toán tử Optional chaining "?."
// let username = userFake?.name; // Nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
//nếu ko trả về undefined
// console.log("username:", username);
//Toán tử Nullish coleting "??"
let fullName = (_a = user1.name) !== null && _a !== void 0 ? _a : "Tên mặc định";
console.log("fullName:", fullName);
// enum Method {
//     GET,POST,PUT,DELETE
// }
let method;
method = "GET";
method = "POST";
method = "PUT";
method = "DELETE";
let item = ["Apple", 2, 5];
let total = item[1] * item[2];
console.log(`Tổng giá tiền cho ${item[0]}: ${total} VND`);
let tasks = [];
let addTask = () => {
    const taskInput = document.getElementById('newTask');
    const task = taskInput.value.trim();
    if (task) {
        tasks = [...tasks, { text: task, completed: false }];
        taskInput.value = '';
        renderTasks();
    }
};
let deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};
let toggleCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};
let filterTasks = (status) => {
    const filteredTasks = tasks.filter(task => {
        return status === 'all' || (status === 'active' && !task.completed) || (status === 'completed' && task.completed);
    });
    renderTasks(filteredTasks);
};
let renderTasks = (filteredTasks = tasks) => {
    const taskList = document.getElementById('taskList');
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
(_b = document.getElementById('newTask')) === null || _b === void 0 ? void 0 : _b.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
