const tasks = localStorage.getItem("tasks").length === 0 ? [] : JSON.parse(localStorage.getItem('tasks'))
loadTaskFromLocalStorage()

let btnSave = document.getElementById('btn-save')

btnSave.addEventListener('click', () => {
    taskAdd()
})

function loadTaskFromLocalStorage() {
    if(tasks.length === 0) {
        return
    }
    tasks.forEach(task => {
        outPutTask(task)
    })
}

function taskAdd() {
    let newTask = {
        title: document.getElementById('title-task').value, 
        description: document.getElementById('description').value
    }
    tasks.push(newTask)

    outPutTask(newTask)
    saveTasksinLocalStorage()
}

function outPutTask(newTask) {
    let tasks = document.getElementById('tasks')

    const div = document.createElement('div') // Div
    const par = document.createElement('p') // Title -> p
    const span = document.createElement('span') // Description -> span

    par.innerText = newTask.title
    span.innerText = newTask.description

    div.className = 'task'
    par.className = 'title-task'
    span.className = 'description-task'

    div.append(par)         // add title -> div
    div.append(span)        // add description -> div
    tasks.appendChild(div)  // add div -> tasks
}

function saveTasksinLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))

    console.log(JSON.parse(localStorage.getItem('tasks')))
}