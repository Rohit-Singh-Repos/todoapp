import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTodoItemStatus } from '../redux/todoSlice';

export const TodoListItem = React.memo(({todoData}) => {
    const dispatch = useDispatch();
    const { id, todoItem, completed } = todoData;
    const changeStatus = (e,id) => {
      dispatch(changeTodoItemStatus({id,todoStatus:e.target.checked}))
    }
    
    return (
      <li key={id}>
          <input type="checkbox" checked={completed} onChange={(e) => changeStatus(e,id)}/>
          <span>{todoItem} {completed ? "(Task Done)" : "(Task Incomplete)"}</span>
      </li>
    )
})
