import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios"
const userAdapter=createEntityAdapter();
const initialState=userAdapter.getInitialState({
    message:"",
    editUserData:{
            _id: "",
            username: "",
            fullName: "",
            roles: [],
            createdDate: "",
            refreshToken: "",
      }
});
export const postNewUser= createAsyncThunk('users/postNewUser', async(user)=>{
    const response=await axios.post("http://localhost:3500/users", user);
    return response.data;
})
export const getUserById=createAsyncThunk('users/getUserById', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(`http://localhost:3500/users/${id}`, config);
    return response.data;
})
export const editUser=createAsyncThunk('users/editUser', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.put("http://localhost:3500/users",data, config);
    return response.data;
})
export const getAllUser=createAsyncThunk('users/getAllUser', async(token)=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get("http://localhost:3500/users",config);
    return response.data;
})
export const deleteUser=createAsyncThunk('users/deleteUser', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.delete(`http://localhost:3500/users/${id}`, config);
    return response.data;
})
const userSlice=createSlice({
    name:'users',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(postNewUser.fulfilled, (state, action)=>{
           state.message=action.payload.message;            
        })
        .addCase(postNewUser.rejected, (state, action)=>{
            state.message=action.error.message;
        })
        .addCase(getAllUser.fulfilled, (state,action)=>{
            state.entities=action.payload.data;
        })
        .addCase(getUserById.fulfilled, (state, action)=>{
            state.editUserData=action.payload.data;
        })
    }
})
export default userSlice.reducer;