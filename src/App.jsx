import { Button } from '@nextui-org/react'
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
    await addTodo(todo)
  }

  const handleTodoDelete = async (idTodo) => {
    await deleteTodo(idTodo)
  }

  const handleUpdateTodo = async (todo) => {
    await updateTodo(todo)
  }

  return (
    <>
      <TodoList
        todos={todos}
        onTodoDelete={handleTodoDelete}
        onUpdateTodo={handleUpdateTodo}
      />
      <AddTodo onAddTodo={handleAddTodo} />
      <Button
        variant='flat'
        color='primary'
      >
        LA BIG BIG BITE DE ERWAN
      </Button>
    </>
  )
}

export default App
