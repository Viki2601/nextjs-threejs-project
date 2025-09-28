"use client";
import AdvancedDate from "@/common/Input/Date";
import Input from "@/common/Input/Input";
import SelectInput from "@/common/Input/SelectInput";
import { useState } from "react";

export default function JobForm({ mode = "add", initialData = {}, onSubmit, onCancel, loading }) {
    const [formData, setFormData] = useState({
        jobTitle: initialData.jobTitle || "",
        department: initialData.department || "",
        jobDescription: initialData.jobDescription || "",
        qualifications: initialData.qualifications || "",
        jobType: initialData.jobType || "",
        deadline: initialData.deadline ? new Date(initialData.deadline).toISOString().split("T")[0] : "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
                {mode === "add" ? "Create New Job Posting" : "Edit Job Posting"}
            </h3>

            {/* Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <Input label={"Job Title"} name={"jobTitle"} onChange={handleChange} value={formData?.jobTitle} type="text" required />
                <SelectInput label="Department" name="department" value={formData?.department} options={["Engineering", "Marketing", "Human Resources", "Finance", "Operations", "Other"]} onChange={handleChange} />
            </div>

            {/* Job Description */}
            <div>
                <label className="block text-sm font-medium mb-1">Job Description</label>
                <textarea
                    name="jobDescription"
                    rows="5"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    placeholder="Describe the role, responsibilities..."
                    className="w-full p-3 border rounded-lg"
                    required
                />
            </div>

            {/* Qualifications */}
            <div>
                <label className="block text-sm font-medium mb-1">Qualifications</label>
                <textarea
                    name="qualifications"
                    rows="3"
                    value={formData.qualifications}
                    onChange={handleChange}
                    placeholder="List required skills, education, and experience..."
                    className="w-full p-3 border rounded-lg"
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                {/* Job Type */}
                <SelectInput label="Job Type" name="jobType" value={formData?.jobType} options={["full-time", "part-time", "contract", "internship", "remote"]} onChange={handleChange} />
                {/* Deadline */}
                <AdvancedDate size="sm" label="Application Deadline" name="deadline" value={formData.deadline} onChange={handleChange} showTime={false} />
            </div>



            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={onCancel} className="px-6 py-2 border rounded-full hover:bg-gray-100">
                    Cancel
                </button>
                <button type="submit" disabled={loading} className="px-6 py-2 bg-[#003F6B] text-white rounded-full shadow hover:bg-[#002b4d] transition disabled:opacity-50">
                    {loading ? "Saving..." : mode === "add" ? "Post Job" : "Update Job"}
                </button>
            </div>
        </form>
    );
}