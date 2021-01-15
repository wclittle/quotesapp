import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducer";
import cablecar from "redux-cablecar";

export const store = configureStore({
  reducer: RootReducer,
  middleware: [thunk, cablecar],
});

export default store;
