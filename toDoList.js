const add = document.getElementById("add");
const taskInput = document.getElementById("taskInput");
let tasksArray = [];
function addTask() {
    let value = taskInput.value.trim();
    if (value !== "") {
        const newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("newTaskContainer");
        const newTask = document.createElement("li");
        newTask.classList.add("unlined");
        newTaskContainer.appendChild(newTask);
        newTask.innerText = value;
        tasksArray.push({ "task": value });
        localStorage.setItem("Tasks", JSON.stringify(tasksArray));
        document.getElementById("list").appendChild(newTaskContainer);
        value = taskInput.value = "";
        value = taskInput.focus();
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.classList.add("deleteBtn");
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btnContainer");
        btnContainer.appendChild(deleteBtn);
        newTaskContainer.appendChild(btnContainer);
        deleteBtn.addEventListener("click", () => {
            newTaskContainer.remove();
        });
        const completeBtn = document.createElement("button");
        completeBtn.setAttribute("data-checked", "false");
        completeBtn.innerHTML = `<i class="fa-regular fa-circle" style="color: #b06100;"></i>`;
        completeBtn.classList.add("completeBtn");
        newTask.appendChild(completeBtn);
        completeBtn.addEventListener("click", () => {
            const isChecked = completeBtn.getAttribute("data-checked") === "true";
            completeBtn.setAttribute("data-checked", !isChecked);
            completeBtn.innerHTML = !isChecked ?
                `<i class="fa-solid fa-circle-check" style="color: #b06100;"></i>` :
                `<i class="fa-regular fa-circle" style="color: #b06100;"></i>`;
            const line = newTask.classList.toggle("line");
            newTask.classList.toggle("unlined");
        });
        const editBtn = document.createElement("button");
        editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
        editBtn.classList.add("editBtn");
        btnContainer.appendChild(editBtn);
        newTaskContainer.appendChild(btnContainer);
        editBtn.addEventListener("click", () => {
            newTask.innerText = prompt("Enter new text");
            newTaskContainer.appendChild(btnContainer);
            newTask.appendChild(completeBtn);
        });
        const completeFilter = document.getElementById("comp");
        const pendingFilter = document.getElementById("pend");
        completeFilter.addEventListener("click", () => {
            if (newTask.classList == "unlined") {
                newTaskContainer.classList.toggle("hidden");
            }
        });
        pendingFilter.addEventListener("click", () => {
            if (newTask.classList == "line") {
                newTaskContainer.classList.toggle("hidden");
            }
        });
    } else {
        alert("enter a task");
    }
}
add.addEventListener("click", () => {
    addTask();
    add.addEventListener("click", function (click) {
        click.preventDefault();
    });
});
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        tasksArray.task = addTask();
    }
});
filter.addEventListener("click", () => {
    const filterOption = document.getElementById("filterOption");
    filterOption.classList.toggle("hidden");
});
