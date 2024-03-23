import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { useTodos } from '../hooks/todosHooks'
import { CircularProgress } from '@nextui-org/react'

function Todos () {
  const { todos, loading } = useTodos()
  console.log(loading)
  return (
    <>
      {
        loading
          ? (
            <div className='flex items-center justify-center'>
              <CircularProgress className='h-screen flex items-center justify-center' size='lg' color='primary' label='Loading...' />
            </div>
            )
          : (
            <>
              <TodoList
                todos={todos}
              />
              <AddTodo />
            </>
            )
      }
    </>
  )
}

export default Todos
