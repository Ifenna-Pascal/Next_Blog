import { configureStore }  from "@reduxjs/toolkit";
import { postReducer } from ".";

export const store = configureStore({
    reducer:{
        posts:postReducer
    }
})