import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios"
const userAdapter=createEntityAdapter();
const initialState=userAdapter.getInitialState({
    message:"",
});
export const postNewUser= createAsyncThunk('users/postNewUser', async(user)=>{
    const response=await axios.post("http://localhost:3500/users", user);
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
    }
})
export default userSlice.reducer;