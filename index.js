const fs = require('fs')
const { Command } = require('commander');
const { error } = require('console');
const program = new Command()


program
  .name('Todo-CLI')
  .description('CLI to some Todo Task, Add a task ,delete a task, mark a task')
    .version('0.8.0');

program.command('show')
    .description('List all Tasks')
    .action(function () {
        fs.readFile('todos.json', 'utf-8', function (err, data) {
            if (err) { console.log(err) }
            else {
                todos = JSON.parse(data)
                console.log("---------Tasks---------")
                todos.forEach(function (todo,index) {
                    console.log(`${index+1}. ${todo.title} ${todo.isComplete? '✅' : ' ❌'}`)
                })
                console.log("-----------------------")
            }
        })
    })
    
  
program.command('add')
    .description("Add a Task")
    .argument('<string>', 'Add a string')
    .action(function (str) {
        const newTodo = {
            title: str,
            isComplete: false
        }
        fs.readFile('todos.json', 'utf-8', function (err, data) {
            if (err) { console.log(err) }
            else {
                const todos = JSON.parse(data)
                todos.push(newTodo)
                fs.writeFile('todos.json', JSON.stringify(todos), function (err) {
                    if (err) console.log(err)
                    else console.log("Successfully added Task : "+ newTodo.title)
                })

            }
        })
    })

program.command('delete')
    .description('Delete a specific task based on the Index')
    .argument('<Number>', 'Add the Number')
    .action(function (num) {
        fs.readFile('todos.json', 'utf-8', function (err, data) {
            if (err) {
            console.log(err)
            } else {
                todos = JSON.parse(data)                
                deletedTask = todos[num]
                todos.splice(num, 1)
                fs.writeFile('todos.json', JSON.stringify(todos), function (err) {
                    if (err) console.log(err)
                    else console.log(deletedTask.title +' Task Deleted Successfully')
                })
        }
    })
    })

program.command('mark')
    .description('Mark a specific Task Complete on base of a index')
    .argument('<Number>', 'Add the Number')
    .action(function (num) {
        fs.readFile('todos.json', 'utf-8', function (err, data) {
            if (err) {
            console.log(err)
            } else {
                todos = JSON.parse(data)
                todos[num].isComplete = !todos[num].isComplete
                fs.writeFile('todos.json', JSON.stringify(todos), function (err) {
                    if (err) {
                        console.log(error)
                    } else {
                        console.log(`${todos[num].title} marked ${todos[num].isComplete ? 'complete ✅': 'incomplete ❌'}`)
                    }
                })
        }
    })
})

program.parse()