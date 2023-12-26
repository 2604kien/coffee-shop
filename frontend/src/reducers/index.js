import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
export const rootReducer=combineReducers({
    users: userReducer,
    auth: authReducer,
})