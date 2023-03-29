import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoItem } from '../redux/todoSlice'

export const TodoInput = React.memo(() => {
    const [inputValue, setInputValue] = useState("");
    const [taskRemaining, setTasksRemaining] = useState(null);
    const { todoAppData } = useSelector((state) => state.todoAppSliceReducer);
    useEffect(() => { 
        setTasksRemaining(todoAppData.filter(task => !task.completed).length) 
    },[todoAppData]);
    
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
      <div className='mb-4'>
         <h2 className='text-center'>Todo App {taskRemaining ?  <span className='fs-4'>(Incomplete Items - {taskRemaining})</span> : ""}</h2>
         <div className="mb-3">
            <label htmlFor="todoInput" className="form-label">Todo Input</label>
            <input className="form-control" id="todoInput" type="text" placeholder='Enter Todo Item ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
         </div>
          <button className='btn btn-success rounded-0 border-0' onClick={addTodo}>Add Todo</button>
      </div>
    )
  })
