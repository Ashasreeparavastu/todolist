document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = document.createTextNode(taskInput.value.trim());

        const li = document.createElement('li');
        li.appendChild(taskText);

        const deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.onclick = function () {
            taskList.removeChild(li);
            saveTasks();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    localStorage.setItem('tasks', taskList.innerHTML);
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = localStorage.getItem('tasks') || '';
}