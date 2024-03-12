import { Button } from '@nextui-org/react'
import './App.css'
import TodoList from './components/TodoList'
import { addTodo, getTodos } from './services/Api'
import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'

// const todos = [
//   {
//     title: 'TODO 1',
//     description: 'TODO DESCRIPTION 1'
//   },
//   {
//     title: 'TODO 2',
//     description: 'TODO DESCRIPTION 2'
//   },
//   {
//     title: 'TODO 3',
//     description: 'TODO DESCRIPTION 3'
//   },
//   {
//     title: 'TODO 4',
//     description: 'TODO DESCRIPTION 4'
//   }
// ]

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

  return (
    <>
      <TodoList
        todos={todos}
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
