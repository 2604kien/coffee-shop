import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import bookingReducer from "./bookingReducer";
import coffeeReducer from "./coffeeReducer";
export const rootReducer=combineReducers({
    users: userReducer,
    auth: authReducer,
    booking: bookingReducer,
    coffee: coffeeReducer,
})