import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000
})

// Add a request interceptor
api.interceptors.request.use(function (config) {
  const savedAuth = window.localStorage.getItem('AUTH')
  if (savedAuth) {
    const auth = JSON.parse(savedAuth)
    const { token } = auth
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
})

async function apiGetTodos () {
  const todos = await api.get('/todos')
  return todos.data
}

async function apiAddTodo (todo) {
  const response = await api.post('/todos', todo)
  return response.data
}

async function apiDeleteTodo (idTodo) {
  const response = await api.delete('/todos', { data: { _id: idTodo } })
  return response.data
}

async function apiUpdateTodo (todo) {
  const response = await api.put('/todos', todo)
  return response.data
}

async function apiLogin (credentials) {
  const response = await api.post('/auth/login', credentials)
  return response.data
}

async function apiSignUp (credentials) {
  const response = await api.post('/auth/signup', credentials)
  return response.data
}

export {
  apiGetTodos,
  apiAddTodo,
  apiDeleteTodo,
  apiUpdateTodo,
  apiLogin,
  apiSignUp
}
