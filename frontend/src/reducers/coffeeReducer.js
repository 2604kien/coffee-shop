import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const coffeeAdapter=createEntityAdapter();

const initialState=coffeeAdapter.getInitialState({
    currCoffeeData:""
});

export const addNewCoffeeRecipe=createAsyncThunk('coffee/addNewCoffeeRecipe', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.post("http://localhost:3500/coffee", data, config)
    return response.data;
})
export const getAllCoffeeRecipe=createAsyncThunk('coffee/getAllCoffeeRecipe', async(token)=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get("http://localhost:3500/coffee", config);
    return response.data;
})
export const fetchCurrCoffeeData=createAsyncThunk('coffee/fetchCurrCoffeeData', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(`http://localhost:3500/coffee/${id}`, config);
    return response.data;
})
export const updateCoffeeData=createAsyncThunk('coffee/updateCoffeeData', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.put('http://localhost:3500/coffee/', data, config);
    return response.data;
})
export const deleteCoffeeById=createAsyncThunk('coffee/deleteCoffeeById', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.delete(`http://localhost:3500/coffee/${id}`,config);
    return response.data;
})
const coffeeSlice=createSlice({
    name:'coffee',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllCoffeeRecipe.fulfilled, (state, action)=>{
            state.entities=action.payload.data;
        })
        .addCase(fetchCurrCoffeeData.fulfilled, (state, action)=>{
            state.currCoffeeData=action.payload.data;
        })
    }
})
export default coffeeSlice.reducer;