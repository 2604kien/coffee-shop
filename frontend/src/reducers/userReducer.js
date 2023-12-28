import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios"
const userAdapter=createEntityAdapter();
const initialState=userAdapter.getInitialState({
    message:"",
    editUserData:""
});
export const postNewUser= createAsyncThunk('users/postNewUser', async(user)=>{
    const response=await axios.post("http://localhost:3500/users", user);
    return response.data;
})
export const getUserById=createAsyncThunk('user/getUserById', async(id)=>{
    const response=await axios.get(`http://localhost:3500/users/${id}`);
    return response.data;
})
export const getAllUser=createAsyncThunk('users/getAllUser', async()=>{
    const response=await axios.get("http://localhost:3500/users");
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