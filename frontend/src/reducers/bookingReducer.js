import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const bookingAdapter=createEntityAdapter();
const initialState=bookingAdapter.getInitialState({});

export const addNewBooking=createAsyncThunk('booking/addNewBooking', async(booking)=>{
    const response=await axios.post("http://localhost:3500/booking", booking);
    return response.data;
})
export const getAllBooking=createAsyncThunk('booking/getAllBooking', async(token)=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response=await axios.get("http://localhost:3500/booking",config);
    return response.data;
})
export const deleteABooking=createAsyncThunk('booking/deleteABooking', async({id, token})=>{
    const config={
        headers: {Authorization: `Bearer ${token}`}
    }
    const response = await axios.delete(`http://localhost:3500/booking/${id}`, config);
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
        .addCase(getAllBooking.fulfilled, (state, action)=>{
            state.entities=action.payload.data;
        })
        .addCase(deleteABooking.fulfilled, (state, action)=>{
            state.status='succeeded';
        })
    }
})
export default bookingSlice.reducer;