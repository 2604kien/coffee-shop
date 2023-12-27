import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios"

const authAdapter=createEntityAdapter();
const initialState=authAdapter.getInitialState({
    token:"",
    isAuthenticated: false
});

export const login=createAsyncThunk('auth/login', async({username, password})=>{
    const response=await axios.post("http://localhost:3500/auth/login", {username, password}, { withCredentials: true });
    return response.data
})

export const refresh=createAsyncThunk('auth/refresh', async()=>{
    const response=await axios.post("http://localhost:3500/auth/refresh",{}, { withCredentials: true });
    return response.data
})
export const logout=createAsyncThunk('auth/logout', async()=>{
    const response=await axios.post("http://localhost:3500/auth/logout",{}, { withCredentials: true })
    return response.data;
})
const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state, action)=>{
            state.status='succeeded';
            state.token=action.payload;
            state.isAuthenticated=true;
        })
        .addCase(refresh.fulfilled,(state, action)=>{
            state.token=action.payload.accessToken;
            state.isAuthenticated=true;
        })
        .addCase(refresh.rejected, (state, action)=>{
            state.token="";
            state.isAuthenticated=false;
        })
        .addCase(logout.fulfilled, (state, action)=>{
            state.token="";
            state.isAuthenticated=false;
        })
    }
})

export default authSlice.reducer;