import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const coffeeAdapter=createEntityAdapter();

const initialState=coffeeAdapter.getInitialState();

export const addNewCoffeeRecipe=createAsyncThunk('coffee/addNewCoffeeRecipe', async(data)=>{
    const response=await axios.post("http://localhost:3500/coffee", data)
    return response.data;
})
export const getAllCoffeeRecipe=createAsyncThunk('coffee/getAllCoffeeRecipe', async()=>{
    const response=await axios.get("http://localhost:3500/coffee");
    return response.data;
})
const coffeeSlice=createSlice({
    name:'coffee',
    initialState: initialState,
    reducers:{}
})
export default coffeeSlice.reducer;