import { useDisclosure } from '@nextui-org/react'
import Todo from './Todo'
import AddTodoModal from './AddTodoModal'
import { useState } from 'react'

function TodoList ({ todos }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, setTodoToEdit] = useState()

  const handleOpenEditModal = (todo) => {
    setTodoToEdit(todo)
    onOpen()
  }

  if (!todos || todos.length < 1) {
    return (
      <div className='w-full flex flex-col items-center justify-center py-6 gap-4'>
        <h2 className='font-semibold text-xl'>No Todos My BAKA Lord 👉👈</h2>
        <img src='https://i.scdn.co/image/ab67616d0000b273f3961c33b17e773eaded75c1' alt='BAKA' className='w-20 h-20' />
      </div>
    )
  }

  return (
    <>
      <div className='flex flex-col items-center gap-4 py-4 px-4'>
        {
        todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              todo={todo}
              openEditModal={handleOpenEditModal}
            />
          )
        })
    }
      </div>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        todoToEdit={todoToEdit}
      />
    </>
  )
}

export default TodoList
