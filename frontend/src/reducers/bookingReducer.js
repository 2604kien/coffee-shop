import {createEntityAdapter, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const bookingAdapter=createEntityAdapter();
const initialState=bookingAdapter.getInitialState({});

export const addNewBooking=createAsyncThunk('booking/addNewBooking', async(booking)=>{
    const response=await axios.post("http://localhost:3500/booking", booking);
    return response.data;
})
export const getAllBooking=createAsyncThunk('booking/getAllBooking', async()=>{
    const response=await axios.get("http://localhost:3500/booking");
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
    }
})
export default bookingSlice.reducer;