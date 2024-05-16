let tasks = [];

function addTask() {
    const taskInput = document.getElementById('newTask');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ text: task, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks(status) {
    const filteredTasks = tasks.filter(task => {
        return status === 'all' || (status === 'active' && !task.completed) || (status === 'completed' && task.completed);
    });
    renderTasks(filteredTasks);
}

function renderTasks(filteredTasks = tasks) {
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
}
