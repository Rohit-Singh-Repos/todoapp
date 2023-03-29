import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodoItem } from '../redux/todoSlice'

export const TodoInput = React.memo(() => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch();
  
    const addTodo = () => {
        if(inputValue !== ""){
            dispatch(addTodoItem(inputValue));
            setInputValue("")
        }else{
            alert("Please enter some input")
        }
    }
  
    return (
      <div>
          <h1 className='text-center'>Todo App</h1>
         <div className="mb-3">
            <label htmlFor="todoInput" className="form-label">Todo Input</label>
            <input className="form-control" id="todoInput" type="text" placeholder='Enter Todo Item ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
         </div>
          <button className='btn btn-success rounded-0 border-0' onClick={addTodo}>Add Todo</button>
      </div>
    )
  })
