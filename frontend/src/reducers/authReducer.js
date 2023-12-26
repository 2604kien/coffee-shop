import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
const authAdapter=createEntityAdapter();
const initialState=authAdapter.getInitialState({
    token:"",
    isAuthenticated: true
});

const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers:{}
})

export default authSlice.reducer;