document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.querySelector('#create-task-form')
  newForm.addEventListener("submit", newTask)
})

const newTask = event => {
  event.preventDefault()

  const li = document.createElement('li')
  const desc = document.querySelector('#new-task-description')
  const task = document.querySelector('#tasks')
  li.innerText = desc.value

  task.append(li)

  event.target.reset();
}