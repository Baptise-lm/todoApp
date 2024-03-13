import './App.css'
import TodoList from './components/TodoList'
import { addTodo, deleteTodo, getTodos, updateTodo } from './services/Api'
import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'

function App () {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const todosData = await getTodos()
      setTodos(todosData)
    }

    getData()
  }, [])

  const handleAddTodo = async (todo) => {
    const todosData = await addTodo(todo)
    setTodos(todosData)
  }

  const handleTodoDelete = async (idTodo) => {
    const todosData = await deleteTodo(idTodo)
    setTodos(todosData)
  }

  const handleUpdateTodo = async (todo) => {
    const todosData = await updateTodo(todo)
    setTodos(todosData)
  }

  return (
    <>
      <h1 className='flex flex-row justify-center p-2'>LA BIG BIG BITE D'ERWAN</h1>
      <TodoList
        todos={todos}
        onTodoDelete={handleTodoDelete}
        onUpdateTodo={handleUpdateTodo}
      />
      <AddTodo onAddTodo={handleAddTodo} />
    </>
  )
}

export default App
