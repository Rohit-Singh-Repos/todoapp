import React from 'react'
import { useSelector } from 'react-redux'
import { TodoListItem } from './TodoListItem';

export const TodoList = React.memo(() => {
  const { todoAppData } = useSelector((state) => state.todoAppSliceReducer);
  return (
    <ul className="list-group">
      
      {
        todoAppData && todoAppData.length !== 0 ? todoAppData.map((item) => (
          <TodoListItem todoData={item} key={item.id}/>
        )) : <h6 className='mt-3 text-center'>No Todo Item Found</h6>
      }
    </ul>
  )
})
