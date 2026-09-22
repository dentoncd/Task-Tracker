window.addEventListener("load", function () {
    let tasksToDo = [];
    let tasksInProgress = [];
    let tasksCompleted = [];

    document.getElementsByTagName("form")[0].addEventListener("submit", function(evt) {
        evt.preventDefault();
        let newTask = document.getElementById("newTask");
        if (newTask.value !== "") {
            tasksToDo.push(newTask.value);
        }
        newTask.value = "";
        displayTasks(tasksToDo, tasksInProgress, tasksCompleted);
    });
    document.getElementById("addTask").addEventListener("click", function() {
        let topTask = tasksToDo.shift();
        if (topTask.value !== "") {
            tasksInProgress.push(topTask);
        }
        displayTasks(tasksToDo, tasksInProgress, tasksCompleted);
    });
    document.getElementById("completeTask").addEventListener("click", function() {
        let topTask = tasksInProgress.shift();
        if (topTask.value !== "") {
            tasksCompleted.push(topTask);
        }
        displayTasks(tasksToDo, tasksInProgress, tasksCompleted);
    });
    document.getElementById("removeTask").addEventListener("click", function() {
        let topTask = tasksInProgress.shift();
        if (topTask.value !== "") {
            tasksToDo.push(topTask);
        }
        displayTasks(tasksToDo, tasksInProgress, tasksCompleted);
    });
});


function displayTasks(tasksToDo, tasksInProgress, tasksCompleted) {
    // Display tasks to do
    let toDoTxt = "<ul>";
    tasksToDo.forEach(task => {
        toDoTxt += `<li>${task}</li>`;
    });
    toDoTxt += "</ul>";
    document.getElementById('tasksToDo').innerHTML = toDoTxt;

    // Display tasks in progress
    let tasksInProgressTxt = "<ul>";
    tasksInProgress.forEach(task => {
        tasksInProgressTxt += `<li>${task}</li>`;
    });
    tasksInProgressTxt += "</ul>";
    document.getElementById('tasksInProgress').innerHTML = tasksInProgressTxt;
    
    // Display completed tasks
    let tasksCompletedTxt = "<ul>";
    tasksCompleted.forEach(task => {
        tasksCompletedTxt += `<li>${task}</li>`;
    });
    tasksCompletedTxt += "</ul>";
    document.getElementById('tasksCompleted').innerHTML = tasksCompletedTxt;
}