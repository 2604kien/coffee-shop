import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios"
import { serverURL } from "./server";
const userAdapter=createEntityAdapter();
const initialState=userAdapter.getInitialState({
    message:"",
    status:"idle",
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
    const response=await axios.post(serverURL+"users", user);
    return response.data;
})
export const getUserById=createAsyncThunk('users/getUserById', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(serverURL+`users/${id}`, config);
    return response.data;
})
export const editUser=createAsyncThunk('users/editUser', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.put(serverURL+"users",data, config);
    return response.data;
})
export const getAllUser=createAsyncThunk('users/getAllUser', async(token)=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(serverURL+"users",config);
    return response.data;
})
export const deleteUser=createAsyncThunk('users/deleteUser', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.delete(serverURL+`users/${id}`, config);
    return response.data;
})
const userSlice=createSlice({
    name:'users',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(postNewUser.fulfilled, (state, action)=>{
           state.message=action.payload.message;
           state.status='succeeded';
        })
        .addCase(postNewUser.pending, (state, action)=>{
            state.status='loading';
        })
        .addCase(postNewUser.rejected, (state, action)=>{
            state.message=action.error.message;
            state.status='idle';
        })
        .addCase(getAllUser.fulfilled, (state,action)=>{
            state.entities=action.payload.data;
            state.status='succeeded';
        })
        .addCase(getAllUser.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(getAllUser.rejected, (state, action)=>{
            state.status='idle';
        })
        .addCase(getUserById.fulfilled, (state, action)=>{
            state.editUserData=action.payload.data;
            state.status='succeeded';
        })
        .addCase(getUserById.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(getUserById.rejected, (state, action)=>{
            state.status='idle';
        })
        .addCase(editUser.fulfilled, (state, action)=>{
            state.status='succeeded';
        })
        .addCase(editUser.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(editUser.rejected, (state, action)=>{
            state.status='idle';
        })
        .addCase(deleteUser.fulfilled, (state, action)=>{
            state.status='succeeded';
        })
        .addCase(deleteUser.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(deleteUser.rejected, (state, action)=>{
            state.status='idle';
        })
        
    }
})
export default userSlice.reducer;