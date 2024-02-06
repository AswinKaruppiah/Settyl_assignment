import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./state/dataslice";

export default configureStore({
  reducer: {
    api: apiReducer,
  },
});
