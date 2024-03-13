import { Button } from '@nextui-org/react'
import React from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'

function DeleteTodoButton ({ onDelete, id }) {
  const handleDelete = (event) => {
    if (onDelete) onDelete(id)
  }
  return (
    <Button variant='light' color='danger' size='md' onPress={handleDelete} isIconOnly>
      <RiDeleteBinFill color='danger' />
    </Button>
  )
}

export default DeleteTodoButton
