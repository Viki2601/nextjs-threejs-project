import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.NEXT_PUBLIC_API_URL_PROD;

// Submit Application
export const submitApplication = createAsyncThunk(
    "applications/submitApplication",
    async (formData, { rejectWithValue }) => {
        try {
            const data = new FormData();
            Object.keys(formData).forEach((key) => {
                data.append(key, formData[key]);
            });

            const res = await fetch(`${API_URL}/apply`, {
                method: "POST",
                body: data,
            });

            if (!res.ok) throw new Error("Failed to submit application");

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const applicationSlice = createSlice({
    name: "applications",
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetApplicationState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitApplication.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitApplication.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitApplication.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetApplicationState } = applicationSlice.actions;
export default applicationSlice.reducer;