import React,{useCallback, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodoItem } from '../redux/todoSlice'

export const TodoInput = React.memo(() => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch();
  
    const addTodo = useCallback(() => {
        if(inputValue !== ""){
            dispatch(addTodoItem(inputValue));
            setInputValue("")
        }else{
            alert("Please enter some input")
        }
    },[inputValue])
  
    return (
      <div>
          <h1>Todo App</h1>
          <input type="text" placeholder='Enter todo ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button onClick={addTodo}>Add Todo</button>
      </div>
    )
  })
