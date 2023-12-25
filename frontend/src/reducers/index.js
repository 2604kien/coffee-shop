import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
export const rootReducer=combineReducers({
    users: userReducer
})