document.addEventListener("DOMContentLoaded", function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (document.getElementById("task-list")) {
        displayTasks();
    }

    // Handle Add Task Form Submission
    const taskForm = document.getElementById("task-form");
    if (taskForm) {
        taskForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("due-date").value;

            const task = {
                id: Date.now(),
                title,
                description,
                dueDate,
                createdDate: new Date().toISOString(),
                updatedDate: new Date().toISOString(),
                completed: false
            };

            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            window.location.href = "index.html";
        });
    }

    // Display Tasks
    function displayTasks() {
        const taskList = document.getElementById("task-list");
        tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        taskList.innerHTML = "";

        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");
            if (task.completed) taskElement.classList.add("complete");

            const dueDate = new Date(task.dueDate);
            const today = new Date().setHours(0, 0, 0, 0);

            if (!task.completed) {
                if (dueDate > today) taskElement.classList.add("future");
                else if (dueDate < today) taskElement.classList.add("past");
                else taskElement.classList.add("today");
            }

            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Due: ${new Date(task.dueDate).toDateString()}</p>
                <p>Created: ${new Date(task.createdDate).toDateString()}</p>
                <button onclick="completeTask(${task.id})">Mark Complete</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
                <button onclick="editTask(${task.id})">Edit</button>
            `;
            taskList.appendChild(taskElement);
        });
    }

    // Mark Task as Complete
    window.completeTask = function(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = true;
                task.updatedDate = new Date().toISOString();
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    };

    // Delete Task
    window.deleteTask = function(id) {
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    };

    // Edit Task
    window.editTask = function(id) {
        const taskToEdit = tasks.find(task => task.id === id);
        if (taskToEdit) {
            localStorage.setItem("editTaskId", id);
            window.location.href = "edit-task.html";
        }
    };

    // Populate Edit Form
    const editForm = document.getElementById("edit-task-form");
    if (editForm) {
        const taskId = localStorage.getItem("editTaskId");
        const task = tasks.find(t => t.id === Number(taskId));
        if (task) {
            document.getElementById("task-id").value = task.id;
            document.getElementById("edit-title").value = task.title;
            document.getElementById("edit-description").value = task.description;
            document.getElementById("edit-due-date").value = task.dueDate;
        }

        editForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const id = Number(document.getElementById("task-id").value);
            const title = document.getElementById("edit-title").value;
            const description = document.getElementById("edit-description").value;
            const dueDate = document.getElementById("edit-due-date").value;

            tasks = tasks.map(task => {
                if (task.id === id) {
                    task.title = title;
                    task.description = description;
                    task.dueDate = dueDate;
                    task.updatedDate = new Date().toISOString();
                }
                return task;
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            window.location.href = "index.html";
        });
    }
});
