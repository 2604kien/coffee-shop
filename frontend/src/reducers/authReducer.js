import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios"
import { serverURL } from "./server";

const authAdapter=createEntityAdapter();
const initialState=authAdapter.getInitialState({
    token:"",
    status:"idle",
    isAuthenticated: false,
    isLogin:false,
    isAdminAuthorized: false,
    userRoles:["None"],
    message:"",
});

export const login=createAsyncThunk('auth/login', async({username, password})=>{
    const response=await axios.post(serverURL+"auth/login", {username, password}, { withCredentials: true });
    return response.data
})

export const refresh=createAsyncThunk('auth/refresh', async()=>{
    const response=await axios.post(serverURL+"auth/refresh",{}, { withCredentials: true });
    return response.data
})
export const logout=createAsyncThunk('auth/logout', async()=>{
    const response=await axios.post(serverURL+"auth/logout",{}, { withCredentials: true })
    return response.data;
})
const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers:{
        resetState:(state)=>state=initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state, action)=>{
            state.status='succeeded';
            state.token=action.payload;
            state.message="";
            if(state.userRoles.includes("Admin")) state.isAdminAuthorized=true;
            else state.isAdminAuthorized=false;
            state.userRoles=JSON.parse(window.atob(state.token.split('.')[1])).UserInfo.roles;
            if(state.userRoles.includes("Admin")) state.isAdminAuthorized=true;
            else state.isAdminAuthorized=false;
            state.isAuthenticated=true;
            state.isLogin=true;
        })
        .addCase(login.pending, (state, action)=>{
            state.status="loading";
        })
        .addCase(login.rejected, (state, action)=>{
            state.message=action.error.message;
            state.status='idle';
        })
        .addCase(refresh.fulfilled,(state, action)=>{
            state.token=action.payload.accessToken;
            state.userRoles=JSON.parse(window.atob(state.token.split('.')[1])).UserInfo.roles;
            if(state.userRoles.includes("Admin")) state.isAdminAuthorized=true;
            else state.isAdminAuthorized=false;
            state.isAuthenticated=true;
            state.status="succeeded";
        })
        .addCase(refresh.pending, (state, action)=>{
            state.status="loading";
        })
        .addCase(refresh.rejected, (state, action)=>{
            state.token="";
            state.status="idle"
            state.isAuthenticated=false;
        })
        .addCase(logout.fulfilled, (state, action)=>{
            state.token="";
            state.isAuthenticated=false;
            state.isAdminAuthorized=false;
            state.isLogin=false;
        })
    }
})
export const {resetState}=authSlice.actions;
export default authSlice.reducer;