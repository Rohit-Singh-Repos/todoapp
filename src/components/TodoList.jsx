import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { TodoListItem } from './TodoListItem';

export const TodoList = React.memo(() => {
  const { todoAppData } = useSelector((state) => state.todoAppSliceReducer);
  const [taskRemaining, setTasksRemaining] = useState(null)
  useEffect(() => { 
    setTasksRemaining(todoAppData.filter(task => !task.completed).length) 
  },[todoAppData]);
  return (
    <ul>
      {taskRemaining ?  <h2>Incomplete Items - {taskRemaining}</h2> : ""}
      {
        todoAppData && todoAppData.length !== 0 ? todoAppData.map((item) => (
          <TodoListItem todoData={item} key={item.id}/>
        )) : <h6>No Data Found</h6>
      }
    </ul>
  )
})
