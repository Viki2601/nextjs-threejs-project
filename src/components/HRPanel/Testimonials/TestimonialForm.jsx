"use client";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createTestimonial } from "@/store/testimonialsSlice";
import Input from "@/common/Input/Input";
import ImageUpload from "@/common/Input/ImageUpload";

export default function TestimonialForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: "",
        email: "",
        profilePic: null,
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("message", form.message);
        if (form.profilePic) formData.append("profilePic", form.profilePic);

        dispatch(createTestimonial(formData));

        setForm({ name: "", email: "", profilePic: null, message: "" });
        alert("✅ Thank you! Your testimonial has been submitted for review.");
    };

    return (
        <div className="p-6 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Write a Testimonial</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                <ImageUpload
                    label="Profile Picture"
                    value={form.profilePic}
                    onChange={(file) => setForm({ ...form, profilePic: file })}
                />
                <div className="grid md:grid-cols-2 gap-3"> 
                    <Input
                        label="Name"
                        name="name"
                        required
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        value={form?.name}
                        type="text"
                    />
                    <Input
                        label="E-mail"
                        name="email"
                        required
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        value={form?.email}
                        type="email"
                    />
                </div>

                <textarea
                    placeholder="Write a Story..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white px-4 py-2 rounded-xl shadow-sm focus:outline-none"
                    required
                    rows={5}
                />

                <button type="submit" className="bg-[#003F6B] text-white w-full py-2 rounded-full">
                    Submit
                </button>
            </form>
        </div>
    );
}