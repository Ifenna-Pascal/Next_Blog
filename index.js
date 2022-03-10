import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from './slice/api_call';

export const fetchPosts = createAsyncThunk(
    "posts/fetch",
    async (thunkAPI) => {
        const response = await API.fetch_all_post()
        return response;
    }
);

const initialState = {
    posts:[],
    loading: false
}

const postSlice = createSlice({
    name: "posts",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state)=> {
            state.loading = true;
        })

        builder.addCase(fetchPosts.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.posts = [...payload.data]
        })
    }
})

export const postReducer  = postSlice.reducer
