# Task Tracker

Task Tracker is a simple browser-based productivity application built with HTML, CSS, and JavaScript. It allows users to create tasks and move them through three stages: **To Do**, **In Progress**, and **Completed**.

The project focuses on array manipulation, DOM updates, event handling, and basic workflow management in JavaScript.

## Features

* Add new tasks
* Move the oldest task from **To Do** into **In Progress**
* Mark the oldest **In Progress** task as completed
* Move an **In Progress** task back to **To Do**
* Automatically refresh the displayed task lists after every action
* Three-column task board layout
* Simple visual organization for task status

## Task Workflow

Tasks move through the application in this order:

```text
To Do
  ↓
In Progress
  ↓
Completed
```

A task can also be moved from **In Progress** back to **To Do**.

## Controls

| Control                       | Action                                          |
| ----------------------------- | ----------------------------------------------- |
| `Add Task`                    | Adds a new task to the To Do list               |
| `Add top task to In Progress` | Moves the first To Do task into In Progress     |
| `Complete top task`           | Moves the first In Progress task into Completed |
| `Remove top task`             | Moves the first In Progress task back to To Do  |

## How It Works

The application stores tasks in three JavaScript arrays:

```javascript
let tasksToDo = [];
let tasksInProgress = [];
let tasksCompleted = [];
```

When a user adds a task, it is pushed into the `tasksToDo` array.

```javascript
tasksToDo.push(newTask.value);
```

Tasks are moved between categories using array methods such as:

```javascript
shift()
push()
```

For example, moving a task from **To Do** to **In Progress** works by removing the first task from one array and adding it to another:

```javascript
let topTask = tasksToDo.shift();
tasksInProgress.push(topTask);
```

After each action, the application calls:

```javascript
displayTasks()
```

to redraw the current task lists on the page.

## Technologies Used

* HTML
* CSS
* JavaScript
* DOM manipulation
* Event listeners
* JavaScript arrays
* CSS Grid

## Project Structure

```text
task-tracker/
│
├── tasks.html
└── scripts/
    └── tasks.js
```

### `tasks.html`

Contains:

* Task input form
* Three-column task board
* To Do section
* In Progress section
* Completed section
* Task control buttons
* Page styling

### `tasks.js`

Handles:

* Adding new tasks
* Moving tasks between categories
* Completing tasks
* Returning tasks to the To Do list
* Updating the displayed task lists
* Form submission and button events

## User Interface

The page uses CSS Grid to divide the task tracker into three sections:

```text
To Do          In Progress          Completed
```

Each category displays its current tasks as a list and updates immediately when the user performs an action.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/dentoncd/Task-Tracker
```

Navigate into the project folder:

```bash
cd task-tracker
```

Then open `tasks.html` in a browser.

If you are using a JetBrains IDE, right-click `tasks.html` and select **Open in Browser**.

Because the page references the JavaScript file using:

```html
<script src="/scripts/tasks.js"></script>
```

running the project through a local development server may work more reliably than opening the HTML file directly.

## Concepts Practiced

This project demonstrates:

* JavaScript arrays
* `push()` and `shift()`
* Form event handling
* Preventing default form submission
* DOM element selection
* Dynamic HTML generation
* Event listeners
* CSS Grid layouts
* Basic workflow logic

## Future Improvements

Possible improvements include:

* Preventing empty tasks from being added
* Preventing actions when a task list is empty
* Allowing users to move individual tasks instead of only the top task
* Adding task deletion
* Adding task priority levels
* Adding due dates
* Saving tasks with `localStorage`
* Drag-and-drop task movement
* Editing existing tasks
* Improved responsive styling

## About

Task Tracker was created as a front-end development project to practice JavaScript arrays, DOM manipulation, event-driven programming, and managing data across multiple task states.
