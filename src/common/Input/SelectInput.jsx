"use client";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function SelectInput({ label, name, value, options = [], onChange, direction = "bottom" }) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const positionClass = {
        bottom: "top-full mt-1 left-0",
        top: "bottom-full mb-1 left-0",
        left: "top-0 right-full mr-1",
        right: "top-0 left-full ml-1"
    }[direction];

    return (
        <div ref={containerRef} className="w-full relative font-urbanist">
            {label && (
                <label className="block mb-2 text-gray-700 font-medium">{label}</label>
            )}
            <div className={`flex items-center justify-between px-4 py-2 border rounded-xl shadow cursor-pointer ${open ? "border-[#003F6B]" : "border-gray-200"}  bg-white hover:border-[#003F6B]`} onClick={() => setOpen(!open)} >
                <span className={value ? "text-black" : "text-gray-400"}>
                    {value || "Select an option"}
                </span>
                <FiChevronDown className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
            </div>

            {open && (
                <ul className={`absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-auto hide-scrollbar ${positionClass}`}>
                    {options.map((opt, index) => (
                        <li key={index} onClick={() => { onChange({ target: { name, value: opt } }); setOpen(false); }} className={`px-4 py-1 cursor-pointer capitalize hover:bg-[#003F6B] hover:text-white transition  ${opt === value ? "bg-[#003F6B] text-white" : ""}`}         >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}