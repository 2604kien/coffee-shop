import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios"

const authAdapter=createEntityAdapter();
const initialState=authAdapter.getInitialState({
    token:"",
    isAuthenticated: false,
    isAdminAuthorized: false,
    userRoles:["None"],
    message:"",
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
    reducers:{
        resetState:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state, action)=>{
            state.status='succeeded';
            state.token=action.payload;
            state.message="";
            if(state.userRoles.includes("Admin")) state.isAdminAuthorized=true;
            else state.isAdminAuthorized=false;
            state.userRoles=JSON.parse(window.atob(state.token.split('.')[1])).UserInfo.roles;
            state.isAuthenticated=true;
        })
        .addCase(refresh.fulfilled,(state, action)=>{
            state.token=action.payload.accessToken;
            state.userRoles=JSON.parse(window.atob(state.token.split('.')[1])).UserInfo.roles;
            if(state.userRoles.includes("Admin")) state.isAdminAuthorized=true;
            else state.isAdminAuthorized=false;
            state.isAuthenticated=true;
        })
        .addCase(refresh.rejected, (state, action)=>{
            state.token="";
            state.isAuthenticated=false;
        })
        .addCase(logout.fulfilled, (state, action)=>{
            state.token="";
            state.isAuthenticated=false;
            state.isAdminAuthorized=false;
        }).addCase(login.rejected, (state, action)=>{
            state.message=action.error.message;
        })
    }
})
export const {resetState}=authSlice.actions;
export default authSlice.reducer;