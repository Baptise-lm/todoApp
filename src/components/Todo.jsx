import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import DeleteTodoButton from './DeleteTodoButton'
import { RiPencilFill } from 'react-icons/ri'

function Todo ({ todo, onDelete, openEditModal }) {
  const { title, description, _id } = todo
  return (
    <Card>
      <CardHeader className='flex flex-row justify-between gap-2'>
        <div className='flex flex-row gap-3'>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
            width={40}
          />
          <div className='flex flex-col flex-grow'>
            <p className='text-md'>{title}</p>
            <p className='text-small text-default-500'>{description}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Button
            isIconOnly
            variant='light'
            onPress={() => openEditModal(todo)}
          >
            <RiPencilFill />
          </Button>
          <DeleteTodoButton onDelete={onDelete} id={_id} />
        </div>
      </CardHeader>
    </Card>
  )
}

export default Todo
