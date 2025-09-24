import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobSlice";

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
    },
});