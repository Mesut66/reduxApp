import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Counter/counterSlice";

export default configureStore({
  reducer: {
    click: countReducer,
  },
});
