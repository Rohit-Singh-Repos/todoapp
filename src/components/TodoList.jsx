import React from 'react'
import { useSelector } from 'react-redux'
import { TodoListItem } from './TodoListItem';

export const TodoList = React.memo(() => {
  const { todoAppData } = useSelector((state) => state.todoAppSliceReducer);
  return (
    <ul>
      {
        todoAppData && todoAppData.length !== 0 ? todoAppData.map((item,index) => (
          <TodoListItem todoData={item} key={item.id}/>
        )) : <h6>No Data Found</h6>
      }
    </ul>
  )
})
