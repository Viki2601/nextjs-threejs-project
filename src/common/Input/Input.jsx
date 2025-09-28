"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Input({ label, name, value, onChange, type = "text", options = [], required = false }) {
    const [open, setOpen] = useState(false);

    if (type === "select") {
        return (
            <div className="w-full relative font-urbanist">
                {label && <label className="block mb-2 text-gray-700 font-medium">{label}</label>}
                <div className={`flex items-center justify-between px-4 py-2 border rounded-xl shadow cursor-pointer ${open ? "border-[#003F6B]" : "border-gray-200"} bg-white hover:border-[#003F6B]`} onClick={() => setOpen(!open)}>
                    <span className={value ? "text-black" : "text-gray-400"}>
                        {value || "Select an option"}
                    </span>
                    <FiChevronDown className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
                </div>

                {open && (
                    <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-auto hide-scrollbar">
                        {options.map((opt, index) => (
                            <li key={index} onClick={() => { onChange({ target: { name, value: opt } }); setOpen(false); }} className={`px-4 py-1 cursor-pointer hover:bg-[#003F6B] hover:text-white transition ${opt === value ? "bg-[#003F6B] text-white" : ""}`}>
                                {opt}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    // Default: text/email input
    return (
        <div className="w-full font-urbanist">
            {label && <label className="block mb-2 text-gray-700 font-medium">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={`Enter ${label?.toLowerCase()}`}
                className="w-full bg-white px-4 py-2 rounded-xl shadow-sm focus:outline-none"
                required={required}
            />
        </div>
    );
}
