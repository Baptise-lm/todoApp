import { Button, useDisclosure } from '@nextui-org/react'
import { BsPlus } from 'react-icons/bs'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        className='fixed bottom-5 right-5 w-14 h-14 z-10'
        radius='full'
        size='lg'
        color='primary'
        variant='shadow'
        isIconOnly
        onClick={onOpen}
      >
        <BsPlus color='white' size={40} />
      </Button>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onAddTodo={onAddTodo}
      />
    </>
  )
}

export default AddTodo
