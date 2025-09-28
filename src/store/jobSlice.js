import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ✅ Async Thunks
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
    const res = await fetch(`${API_URL}/getJobs`);
    if (!res.ok) throw new Error("Failed to fetch jobs");
    const data = await res.json();
    return data.jobs;
});

export const fetchJobById = createAsyncThunk("jobs/fetchJobById", async (slug) => {
    const res = await fetch(`${API_URL}/jobs/slug/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch job");
    const data = await res.json();
    return data.job;
});

export const createJob = createAsyncThunk("jobs/createJob", async (jobData) => {
    const res = await fetch(`${API_URL}/createJob`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
    });
    if (!res.ok) throw new Error("Failed to create job");
    const data = await res.json();
    return data.job;
});

export const updateJob = createAsyncThunk("jobs/updateJob", async ({ slug, jobData }) => {
    const res = await fetch(`${API_URL}/updateJob/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
    });
    if (!res.ok) throw new Error("Failed to update job");
    const data = await res.json();
    return data.updatedJob;
});


export const deleteJob = createAsyncThunk("jobs/deleteJob", async (slug) => {
    const res = await fetch(`${API_URL}/deleteJobs/${slug}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete job");
    return slug;
});

// ✅ Slice
const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        currentJob: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch All
            .addCase(fetchJobs.pending, (state) => { state.loading = true; })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Fetch One
            .addCase(fetchJobById.fulfilled, (state, action) => {
                state.currentJob = action.payload;
            })

            // Create
            .addCase(createJob.fulfilled, (state, action) => {
                state.jobs.unshift(action.payload);
            })

            // Update
            .addCase(updateJob.fulfilled, (state, action) => {
                state.jobs = state.jobs.map((job) =>
                    job._id === action.payload._id ? action.payload : job
                );
            })

            // Delete
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.jobs = state.jobs.filter(job => job.slug !== action.payload);
            });
    },
});

export default jobsSlice.reducer;