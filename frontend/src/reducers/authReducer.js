import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios"

const authAdapter=createEntityAdapter();
const initialState=authAdapter.getInitialState({
    token:"",
    isAuthenticated: false
});

export const login=createAsyncThunk('auth/login', async({username, password})=>{
    const response=await axios.post("http://localhost:3500/auth/login", {username, password});
    return response.data
})

export const refresh=createAsyncThunk('auth/refresh', async()=>{
    const response=await axios.get("http://localhost:3500/auth/refresh");
    return response.data
})

const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state, action)=>{
            state.status='succeeded';
            state.token=action.payload;
            console.log(action.payload);
            state.isAuthenticated=true;
        })
        .addCase(refresh.fulfilled,(state, action)=>{
            state.token=action.payload.token;
            state.isAuthenticated=true;
        })
    }
})

export default authSlice.reducer;