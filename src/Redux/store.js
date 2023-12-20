import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Features/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
