import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import DeleteTodoButton from './DeleteTodoButton'
import { RiPencilFill } from 'react-icons/ri'
import { useTodos } from '../hooks/todosHooks'

function Todo ({ todo, openEditModal }) {
  const { title, description, _id, important } = todo
  const { deleteTodo } = useTodos()
  return (
    <Card className='w-full lg:w-3/4'>
      <CardHeader className='flex flex-row justify-between gap-2'>
        <div className='flex flex-row gap-3'>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://cdn-icons-png.freepik.com/512/2098/2098402.png'
            width={40}
          />
          <div className='flex flex-col flex-grow'>
            <div className='flex flex-row gap-2 items-center'>
              <p className='text-md'>{title}</p>
              {
                important
                  ? (
                    <img className='w-4 h-4' src='https://static.vecteezy.com/system/resources/previews/027/634/560/original/exclamation-icon-attention-logo-warning-speech-bubble-important-round-mark-png.png' />
                    )
                  : (
                    <></>
                    )
              }
            </div>

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
          <DeleteTodoButton onDelete={deleteTodo} id={_id} />
        </div>
      </CardHeader>
    </Card>
  )
}

export default Todo
