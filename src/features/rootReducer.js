import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
