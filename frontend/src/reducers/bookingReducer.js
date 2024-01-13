import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { serverURL } from "./server";


const bookingAdapter=createEntityAdapter();
const initialState=bookingAdapter.getInitialState({});

export const addNewBooking=createAsyncThunk('booking/addNewBooking', async(booking)=>{
    const response=await axios.post(serverURL+"booking", booking);
    return response.data;
})
export const getAllBooking=createAsyncThunk('booking/getAllBooking', async(token)=>{
    
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get(serverURL+"booking",config);
    return response.data;
})
export const deleteABooking=createAsyncThunk('booking/deleteABooking', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response = await axios.delete(serverURL+`booking/${id}`, config);
    return response.data;
})
const bookingSlice=createSlice({
    name:'booking',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(addNewBooking.fulfilled, (state, action)=>{
            state.satus='succeeded';
        })
        .addCase(addNewBooking.pending, (state, action)=>{
            state.status='loading';
        })
        .addCase(addNewBooking.rejected, (state, action)=>{
            state.state="idle";
        })
        .addCase(getAllBooking.fulfilled, (state, action)=>{
            state.entities=action.payload.data;
            state.status='succeeded';
        })
        .addCase(getAllBooking.pending, (state, action)=>{
            state.status='loading';
        })

        .addCase(getAllBooking.rejected, (state, action)=>{
            state.status='idle';
        })
        
        .addCase(deleteABooking.fulfilled, (state, action)=>{
            state.status='succeeded';
        })
        .addCase(deleteABooking.pending, (state,action)=>{
            state.status='loading';
        })
        .addCase(deleteABooking.rejected, (state, action)=>{
            state.status='idle';
        })
        
    }
})
export default bookingSlice.reducer;