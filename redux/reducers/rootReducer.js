import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
});

export default rootReducer;
