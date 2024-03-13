import { Card, CardHeader, Image } from '@nextui-org/react'
import DeleteTodoButton from './DeleteTodoButton'

function Todo ({ title, description, onDelete, id }) {
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
          <div className='flex flex-col'>
            <p className='text-md'>{title}</p>
            <p className='text-small text-default-500'>{description}</p>
          </div>
        </div>
        <DeleteTodoButton onDelete={onDelete} id={id} />
      </CardHeader>
    </Card>
  )
}

export default Todo
