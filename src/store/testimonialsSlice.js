import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.NEXT_PUBLIC_API_URL_PROD;

export const fetchTestimonials = createAsyncThunk(
    "testimonials/fetchTestimonials",
    async () => {
        const res = await fetch(`${API_URL}/testimonials`);
        return await res.json();
    }
);

export const createTestimonial = createAsyncThunk(
    "testimonials/createTestimonial",
    async (data) => {
        const res = await fetch(`${API_URL}/testimonials`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await res.json();
    }
);


const testimonialSlice = createSlice({
    name: "testimonials",
    initialState: { list: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTestimonials.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(createTestimonial.fulfilled, (state, action) => {
                state.list.push(action.payload);
            });
    },
});

export default testimonialSlice.reducer;