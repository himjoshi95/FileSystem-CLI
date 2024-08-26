# Todo-CLI

**Todo-CLI** is a simple command-line interface (CLI) application built with Node.js to manage your tasks efficiently. With Todo-CLI, you can add, delete, view, and mark tasks as complete or incomplete, all from the comfort of your terminal.

## Features

- **Add a Task**: Quickly add a new task to your to-do list.
- **List Tasks**: Display all tasks, showing whether each task is complete or incomplete.
- **Delete a Task**: Remove a task from your to-do list by its index.
- **Mark a Task**: Toggle a task's completion status by its index.

## Installation

To use Todo-CLI, ensure that you have Node.js installed, then clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/himjoshi95/Todo-FileSystem-CLI.git
cd todo-cli
npm install
```
## Usage

### For Help

```bash
node index.js -h
```

### Show All Tasks
List all tasks with their completion status:
```bash
node index.js show
```
### Add a Task
Add a new task to your to-do list:
```bash
node index.js add "Your Task Description"
```

### Delete a Task
Delete a task by specifying its index:
```bash
node index.js delete 1
```

### Mark a Task
Toggle the completion status of a task by its index:
```bash
node index.js mark 1
```
### Version
Current version: 0.8.0

