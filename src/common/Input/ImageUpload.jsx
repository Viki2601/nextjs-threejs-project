"use client";
import { useRef, useState } from "react";

export default function ImageUpload({ label, value, onChange }) {
    const [preview, setPreview] = useState(value || "");
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                onChange(file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>

            <div onClick={() => fileInputRef.current.click()} className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden hover:border-blue-400 transition">
                {preview ? (
                    <img src={preview} alt="Profile Preview" className="w-full h-full object-cover rounded-full" />
                ) : (
                    <span className="text-gray-400 text-sm">Upload</span>
                )}
            </div>

            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
        </div>
    );
}