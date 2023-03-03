import { configureStore } from "@reduxjs/toolkit";
import { todoAppSliceReducer } from "./todoSlice";

export const store = configureStore({
    reducer:{
        todoAppSliceReducer
    },
    devTools:process.env.NODE_ENV !== "production" ? true : false
})