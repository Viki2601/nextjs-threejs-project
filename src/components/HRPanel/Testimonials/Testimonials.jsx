"use client";
import { fetchTestimonials } from "@/store/testimonialsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestimonialForm from "./TestimonialForm";
import { motion } from "framer-motion";

export default function Testimonials() {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.testimonials);
    const [activeTab, setActiveTab] = useState("add");
    const tabs = [
        { id: "add", label: "Add New Testimonials" },
        { id: "list", label: "Lists" },
    ];

    useEffect(() => {
        dispatch(fetchTestimonials());
    }, [dispatch]);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">What People Say</h2>
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

            {/* Tab Content */}
            <div className="mt-8">
                {activeTab === "add" && (
                    <div className="h-[calc(100vh-250px)] p-6 bg-white/30 backdrop-blur-lg shadow rounded-xl overflow-y-auto hide-scrollbar">
                        <TestimonialForm />
                    </div>
                )}

                {activeTab === "update" && (
                    <div className="h-[calc(100vh-250px)] p-6 bg-white/30 backdrop-blur-lg shadow rounded-xl overflow-y-auto hide-scrollbar">
                    </div>
                )}
            </div>

            <div className="space-y-4">
                {list
                    .filter((t) => t.status === "approved")
                    .map((t) => (
                        <div key={t._id} className="border p-3 rounded shadow">
                            <p className="font-semibold">{t.name}</p>
                            <p>{t.message}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
