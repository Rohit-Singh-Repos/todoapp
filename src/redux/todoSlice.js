import { createSlice } from "@reduxjs/toolkit";

const todoAppSlice = createSlice({
    name:"todoAppSlice",
    initialState:{
        todoAppData:[]
    },
    reducers:{
        addTodoItem:(state,{payload}) => {
            state.todoAppData = [
                ...state.todoAppData,
                {
                    id:new Date().getTime(),
                    todoItem:payload,
                    completed:false
                }
            ]
        },
        changeTodoItemStatus:(state,{payload}) => {
            const { id, todoStatus } = payload
            const findTodoData = state.todoAppData.find((item) => item.id === id);
            findTodoData.completed = todoStatus
        }
    }
})

export const { actions : {
    addTodoItem,
    changeTodoItemStatus
},reducer:todoAppSliceReducer } = todoAppSlice