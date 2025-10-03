import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobSlice";
import testimonialsReducer from "./testimonialsSlice";

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        testimonials: testimonialsReducer,
    },
});