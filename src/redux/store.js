import { configureStore } from "@reduxjs/toolkit";
import { todoAppSliceReducer } from "./todoSlice";

export const todoAppStore = configureStore({
    reducer:{
        todoAppSliceReducer
    },
    devTools:process.env.NODE_ENV !== "production" ? true : false
})