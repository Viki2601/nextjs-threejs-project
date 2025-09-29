"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { createJob, fetchJobs, updateJob } from "@/store/jobSlice";
import { toast } from "react-toastify";
import JobForm from "./JobForm";
import JobLists from "./JobLists";

export default function JobPosting() {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("add");
    const dispatch = useDispatch();
    const [editJob, setEditJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = (job) => {
        setEditJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setEditJob(null);
        setIsModalOpen(false);
    };

    const tabs = [
        { id: "add", label: "Add New Job", desc: "Easily create and publish job openings to attract top talent. Provide details about roles, responsibilities, and required qualifications to ensure the right candidates apply." },
        { id: "update", label: "Update Existing", desc: "Edit, update, or remove job postings to keep listings accurate and relevant. Track applications, update job descriptions, and modify requirements as needed." },
        { id: "archive", label: "View Archive", desc: "" },
    ];

    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            await dispatch(createJob(values)).unwrap();
            toast.success('Job posted successfully!');
        } catch (error) {
            toast.error(`⚠️ Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (updatedData) => {
        try {
            setLoading(true);
            await dispatch(updateJob({ slug: editJob?.slug, data: updatedData })).unwrap();
            toast.success("Job updated successfully!");
            setIsModalOpen(false);
            setEditJob(null);
            dispatch(fetchJobs());
        } catch (error) {
            toast.error(`⚠️ Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold text-[#003F6B] mb-6">Job Postings</h1>
            {/* Tabs */}
            <div className="flex space-x-8 border-b border-gray-300 relative">
                {tabs?.map((tab) => (
                    <button key={tab?.id} onClick={() => setActiveTab(tab?.id)} className={`cursor-pointer pb-3 relative font-semibold text-lg transition-colors ${activeTab === tab?.id ? "text-[#003F6B]" : "text-gray-500"}`}>
                        {tab?.label}
                        {activeTab === tab?.id && (
                            <motion.div layoutId="underline" className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#003F6B] rounded-full" />
                        )}
                    </button>
                ))}
            </div>
            <p className="py-2 text-md font-semibold">{tabs?.map((tab) => (
                activeTab === tab?.id && tab?.desc
            ))}</p>

            {/* Tab Content */}
            <div className="mt-8">
                {activeTab === "add" && (
                    <div className="h-[calc(100vh-250px)] p-6 bg-white/30 backdrop-blur-lg shadow rounded-xl overflow-y-auto hide-scrollbar">
                        <JobForm mode="add" onSubmit={handleSubmit} loading={loading} />
                    </div>
                )}

                {activeTab === "update" && (
                    <div className="h-[calc(100vh-250px)] p-6 bg-white/30 backdrop-blur-lg shadow rounded-xl overflow-y-auto hide-scrollbar">
                        <JobLists onEdit={handleEditClick} />
                    </div>
                )}


                {activeTab === "archive" && (
                    <div className="p-6 bg-white shadow rounded-xl">
                        <h2 className="text-xl font-bold mb-4 text-[#003F6B]">Archived Jobs</h2>
                        <p className="text-gray-600">All archived jobs will be listed here.</p>
                        {/* Example - Archived job list could go here */}
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="bg-white h-[calc(100vh-100px)] overflow-y-auto hide-scrollbar p-6 rounded-xl shadow-lg w-full max-w-2xl">
                        <JobForm mode="edit" initialData={editJob} onSubmit={handleUpdate} onCancel={handleCloseModal} loading={loading} />
                    </motion.div>
                </div>
            )}
        </div>
    );
}