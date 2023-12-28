import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const coffeeAdapter=createEntityAdapter();

const initialState=coffeeAdapter.getInitialState({
    currCoffeeData:""
});

export const addNewCoffeeRecipe=createAsyncThunk('coffee/addNewCoffeeRecipe', async(data)=>{
    const response=await axios.post("http://localhost:3500/coffee", data)
    return response.data;
})
export const getAllCoffeeRecipe=createAsyncThunk('coffee/getAllCoffeeRecipe', async()=>{
    const response=await axios.get("http://localhost:3500/coffee");
    return response.data;
})
export const fetchCurrCoffeeData=createAsyncThunk('coffee/fetchCurrCoffeeData', async(id)=>{
    const response=await axios.get(`http://localhost:3500/coffee/${id}`);
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