let editingTaskId = null;

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priorityInput = document.getElementById("priority");
const statusInput = document.getElementById("status");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

// Create or Update Task
async function addTask() {

    if (titleInput.value.trim() === "") {
        alert("Please enter a task title.");
        return;
    }

    const task = {
        title: titleInput.value,
        description: descriptionInput.value,
        priority: priorityInput.value,
        status: statusInput.value
    };

    let url = "/api/tasks";
    let method = "POST";

    if (editingTaskId !== null) {
        url = `/api/tasks/${editingTaskId}`;
        method = "PUT";
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    if (response.ok) {

        // Clear form
        titleInput.value = "";
        descriptionInput.value = "";
        priorityInput.value = "Medium";
        statusInput.value = "Pending";

        editingTaskId = null;
        addBtn.textContent = "Save Task";

        loadTasks();
    }
}

// Load all tasks
async function loadTasks() {

    const response = await fetch("/api/tasks");
    const tasks = await response.json();

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        let priorityClass = task.priority.toLowerCase();

        let statusClass = "";

        if (task.status === "Pending") {
            statusClass = "pending";
        } else if (task.status === "Completed") {
            statusClass = "completed";
        } else {
            statusClass = "progress";
        }

        taskList.innerHTML += `
        <div class="task-card">

            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <p>
                <strong>Priority:</strong>
                <span class="priority ${priorityClass}">
                    ${task.priority}
                </span>
            </p>

            <p>
                <strong>Status:</strong>
                <span class="status ${statusClass}">
                    ${task.status}
                </span>
            </p>

            <div class="button-group">

                <button
                    class="edit-btn edit-task"
                    data-id="${task.id}"
                    data-title="${task.title}"
                    data-description="${task.description}"
                    data-priority="${task.priority}"
                    data-status="${task.status}">
                    ✏ Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">
                    🗑 Delete
                </button>

            </div>

        </div>
        `;
    });

    // Attach Edit button events
    document.querySelectorAll(".edit-task").forEach(button => {

        button.addEventListener("click", function () {

            editingTaskId = Number(this.dataset.id);

            titleInput.value = this.dataset.title;
            descriptionInput.value = this.dataset.description;
            priorityInput.value = this.dataset.priority;
            statusInput.value = this.dataset.status;

            addBtn.textContent = "Update Task";

            // Scroll back to the form
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });

}

loadTasks();

// Delete Task
async function deleteTask(id) {

    const confirmDelete = confirm("Are you sure you want to delete this task?");

    if (!confirmDelete) return;

    await fetch(`/api/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}