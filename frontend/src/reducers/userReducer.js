import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter=createEntityAdapter();
const initialState=userAdapter.getInitialState();

const userSlice=createSlice({
    name:'users',
    initialState: initialState,
    reducers:{}
})
export default userSlice.reducer;