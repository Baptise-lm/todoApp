import Todo from './Todo'

function TodoList ({ todos, onTodoDelete }) {
  return (
    <div className='flex flex-col gap-4 py-2 px-4'>
      {
        todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              id={todo._id}
              title={todo.title}
              description={todo.description}
              onDelete={onTodoDelete}
            />
          )
        })
    }
    </div>
  )
}

export default TodoList
