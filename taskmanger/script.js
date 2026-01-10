function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;
  span.onclick = () => li.classList.toggle("completed");

  const del = document.createElement("span");
  del.innerText = "❌";
  del.className = "delete";
  del.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(del);
  taskList.appendChild(li);

  input.value = "";
}
]
