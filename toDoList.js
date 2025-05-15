const add = document.getElementById("add");
const taskInput = document.getElementById("taskInput");
function addTask() {
    let value = taskInput.value.trim();
    if (value !== "") {
        const newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("newTaskContainer");
        const newTask = document.createElement("li");
        newTask.classList.add("unlined");
        newTaskContainer.appendChild(newTask);
        newTask.innerText = value;
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
        const completBtn = document.createElement("button");
completBtn.setAttribute("data-checked", "false");
completBtn.innerHTML = `<i class="fa-regular fa-circle" style="color: #b06100;"></i>`;
        completBtn.classList.add("completBtn");
        newTask.appendChild(completBtn);
        completBtn.addEventListener("click", () => {
            const isChecked = completBtn.getAttribute("data-checked") === "true";
completBtn.setAttribute("data-checked", !isChecked);
completBtn.innerHTML = !isChecked ?
    `<i class="fa-solid fa-circle-check" style="color: #b06100;"></i>` :
    `<i class="fa-regular fa-circle" style="color: #b06100;"></i>`;
           const line= newTask.classList.toggle("line");
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
            newTask.appendChild(completBtn);
            const filter = document.getElementById("filter");
        });
    const completFilter= document.getElementById("comp");
    const pendingFilter= document.getElementById("pend");
    completFilter.addEventListener("click", () => {
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
        addTask();
    }
});
filter.addEventListener("click", () => {
    const filterOption = document.getElementById("filterOption");
    filterOption.classList.toggle("hidden");
});