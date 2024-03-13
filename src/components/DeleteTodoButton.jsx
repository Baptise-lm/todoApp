import { Button } from '@nextui-org/react'
import React from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'

function DeleteTodoButton ({ onDelete, id }) {
  const handleDelete = (event) => {
    if (onDelete) onDelete(id)
  }
  return (
    <Button color='danger' size='sm' onPress={handleDelete}>
      <RiDeleteBinFill color='white' />
    </Button>
  )
}

export default DeleteTodoButton
