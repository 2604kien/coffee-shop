import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import bookingReducer from "./bookingReducer";
export const rootReducer=combineReducers({
    users: userReducer,
    auth: authReducer,
    booking: bookingReducer,
})