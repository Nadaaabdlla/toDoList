const add = document.getElementById("add");
const taskInput = document.getElementById("taskInput");
function addTask() {
    let value = taskInput.value.trim();
    if (value !== "") {
        const newTask = document.createElement("li");
        newTask.innerText = value;
        document.getElementById("list").appendChild(newTask);
        value = taskInput.value = "";
        value = taskInput.focus();
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.classList.add("deleteBtn");
        newTask.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            newTask.remove();
        });
        const completBtn = document.createElement("button");
        completBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        completBtn.classList.add("completBtn");
        newTask.appendChild(completBtn);
        completBtn.addEventListener("click", () => {
           const line= newTask.classList.toggle("line");
        });
        const editBtn = document.createElement("button");
        editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
        editBtn.classList.add("editBtn");
        newTask.appendChild(editBtn);
        editBtn.addEventListener("click", () => {
            newTask.innerText = prompt("Enter new text");
            newTask.appendChild(deleteBtn);
            newTask.appendChild(completBtn);
            newTask.appendChild(editBtn);
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
const filter = document.getElementById("filter");
filter.addEventListener("click", () => {
    const filterOption = document.getElementById("filterOption");
    filterOption.classList.toggle("hidden");
});


