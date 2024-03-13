import axios from 'axios'

const API_URL = 'http://localhost:3000'

async function getTodos () {
  const todos = await axios.get(API_URL + '/todos')
  return todos.data
}

async function addTodo (todo) {
  const response = await axios.post(API_URL + '/todos', todo)
  console.log(response)
}

async function deleteTodo (idTodo) {
  const response = await axios.delete(API_URL + '/todos', { data: { _id: idTodo } })
  console.log(response)
  console.log(idTodo)
}

export {
  getTodos,
  addTodo,
  deleteTodo
}
