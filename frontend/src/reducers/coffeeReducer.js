import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverURL } from "./server";

const coffeeAdapter=createEntityAdapter();

const initialState=coffeeAdapter.getInitialState({
    currCoffeeData:"",
    status:"idle",
    message:""
});

export const addNewCoffeeRecipe=createAsyncThunk('coffee/addNewCoffeeRecipe', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
        
    }
    const response=await axios.post(serverURL+"coffee", data, config)
    return response.data;
})
export const getAllCoffeeRecipe=createAsyncThunk('coffee/getAllCoffeeRecipe', async(token)=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(serverURL+"coffee", config);
    return response.data;
})
export const fetchCurrCoffeeData=createAsyncThunk('coffee/fetchCurrCoffeeData', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(serverURL+`coffee/${id}`, config);
    return response.data;
})
export const updateCoffeeData=createAsyncThunk('coffee/updateCoffeeData', async({data, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.put(serverURL+'coffee/', data, config);
    return response.data;
})
export const deleteCoffeeById=createAsyncThunk('coffee/deleteCoffeeById', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.delete(serverURL+`coffee/${id}`,config);
    return response.data;
})
const coffeeSlice=createSlice({
    name:'coffee',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllCoffeeRecipe.fulfilled, (state, action)=>{
            state.entities=action.payload.data;
            state.status="succeeded"
        })
        .addCase(getAllCoffeeRecipe.pending, (state, action)=>{
            state.status="loading"
        })
        .addCase(getAllCoffeeRecipe.rejected, (state, action)=>{
            state.status="idle"
        })
        
        .addCase(fetchCurrCoffeeData.fulfilled, (state, action)=>{
            state.currCoffeeData=action.payload.data;
            state.status="succeeded"
        })
        .addCase(fetchCurrCoffeeData.pending, (state, action)=>{
            state.status="loading"
        })
        .addCase(fetchCurrCoffeeData.rejected, (state, action)=>{
            state.status="idle"
        })
        .addCase(addNewCoffeeRecipe.fulfilled, (state, action)=>{
            state.status='succeeded';
            console.log(action.payload)
        })
        .addCase(addNewCoffeeRecipe.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(addNewCoffeeRecipe.rejected, (state, action)=>{
            state.status='idle';
        })
        .addCase(updateCoffeeData.fulfilled, (state, action)=>{
            state.status='succeeded';
        })
        .addCase(updateCoffeeData.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(updateCoffeeData.rejected, (state, action)=>{
            state.status='idle';
        })
        .addCase(deleteCoffeeById.fulfilled, (state, action)=>{
            state.status='succeeded';
        })
        .addCase(deleteCoffeeById.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(deleteCoffeeById.rejected, (state, action)=>{
            state.status='idle';
        })
        
        
    }
})
export default coffeeSlice.reducer;