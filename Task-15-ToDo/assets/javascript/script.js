let tasks = [
  // {taskName: 'This is the first task of list', taskDue: '01-08-2024'},
]



// function for loading tasks 
function loadTasks(){
  var taskList = document.getElementById("task-lists");
  taskList.innerHTML = '';

  tasks.forEach((tasks, index) => {
    var taskTile = document.createElement("div");
    taskTile.className = "task-tile";

    taskTile.innerHTML = `
        <div class="">
            <input type="checkbox" id="taskCheck${index}" class="task-tile__checkbox" onchange="isChecked(${index})">
        </div>
        <div class="">
            <h3 id="task_name${index}" class="">${tasks.taskName}</h3>
            <p id="task_due${index}">${tasks.taskDue}</p>
        </div>
        <div class="task-tile__icons-container">
            <img src="./assets/images/icon-up.svg" alt="" class="task-tile__icon" onClick="moveTaskUp(${index})">
            <img src="./assets/images/icon-delete.svg" alt="" class="task-tile__icon" onClick="deleteTask(${index})">
            <img src="./assets/images/icon-down.svg" alt="" class="task-tile__icon" onClick="moveTaskDown(${index})">
        </div>
    `;

    taskList.appendChild(taskTile);
  })

}


// function for adding task. click plus icon to work
function addTask() {
  const newTaskInput = document.getElementById("addItem");
  const newTask = newTaskInput.value.trim();
  
  if(newTask !== ''){
    const newDue = String(prompt("Enter due date of the task:"));
    let newObj = {taskName: newTask, taskDue: newDue}
    tasks.push(newObj);
    newTaskInput.value = "";
    loadTasks();
  }else{
    alert("Type new task")
  }
}

// function for delete a task from array
function deleteTask(index) {
  tasks.splice(index, 1);
  loadTasks();
}

// function for moving a task upward
function moveTaskUp(index) {
  if (index > 0) {
      let temp = tasks[index];
      tasks[index] = tasks[index - 1];
      tasks[index - 1] = temp;
      loadTasks();
  }
}

// function for moving a task downward
function moveTaskDown(index) {
  if (index < tasks.length - 1) {
      let temp = tasks[index];
      tasks[index] = tasks[index + 1];
      tasks[index + 1] = temp;
      loadTasks();
  }
}



// function to check if the task is checked 
function isChecked(index) {
  const checkbox = document.getElementById(`taskCheck${index}`);
  const taskName = document.getElementById(`task_name${index}`);
  const taskDue = document.getElementById(`task_due${index}`)

  if (checkbox.checked) {
      taskName.classList.add("task-tile__task-done");
      taskDue.classList.add("task-tile__task-done");
  } else {
      taskName.classList.remove("task-tile__task-done");
      taskDue.classList.remove("task-tile__task-done");
  }
}


window.onload = loadTasks();
alert('Welcome to To-do app 🖋️ Type your tasks in the input box and Click "plus" icon to add. ')