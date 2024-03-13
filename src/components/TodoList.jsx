import { useDisclosure } from '@nextui-org/react'
import Todo from './Todo'
import AddTodoModal from './AddTodoModal'
import { useState } from 'react'

function TodoList ({ todos, onTodoDelete, onUpdateTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, setTodoToEdit] = useState()

  const handleOpenEditModal = (todo) => {
    setTodoToEdit(todo)
    onOpen()
  }

  return (
    <>
      <div className='flex flex-col gap-4 py-2 px-4'>
        {
        todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              todo={todo}
              onDelete={onTodoDelete}
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
        onUpdateTodo={onUpdateTodo}
        todoToEdit={todoToEdit}
      />
    </>
  )
}

export default TodoList
