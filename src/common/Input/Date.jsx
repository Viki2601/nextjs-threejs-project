"use client";
import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SelectInput from "./SelectInput";
import useOutsideClick from "@/Hooks/useOutsideClick";

export default function AdvancedDate({ label, name, value, onChange, showTime = false }) {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);
    const [currentMonth, setCurrentMonth] = useState(selectedDate ? selectedDate.getMonth() : new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(selectedDate ? selectedDate.getFullYear() : new Date().getFullYear());
    const [hours, setHours] = useState(selectedDate ? selectedDate.getHours() % 12 || 12 : 12);
    const [minutes, setMinutes] = useState(selectedDate ? selectedDate.getMinutes().toString().padStart(2, "0") : "00");
    const [amPm, setAmPm] = useState(selectedDate && selectedDate.getHours() >= 12 ? "PM" : "AM");
    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const containerRef = useRef(null);

    useOutsideClick(containerRef, () => setOpen(false));
    const handleDateSelect = (day) => {
        const hour24 = amPm === "PM" ? (hours % 12) + 12 : hours % 12;
        const date = new Date(currentYear, currentMonth, day, hour24, minutes);
        setSelectedDate(date);
        onChange({ target: { name, value: date.toISOString() } });
        if (!showTime) setOpen(false);
    };

    const handleTimeChange = (newHours, newMinutes, newAmPm) => {
        if (selectedDate) {
            const hour24 = newAmPm === "PM" ? (newHours % 12) + 12 : newHours % 12;
            const date = new Date(selectedDate);
            date.setHours(hour24);
            date.setMinutes(Number(newMinutes));
            setSelectedDate(date);
            onChange({ target: { name, value: date.toISOString() } });
        }
    };

    useEffect(() => {
        if (showTime && selectedDate) handleTimeChange(hours, minutes, amPm);
    }, [hours, minutes, amPm]);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div ref={containerRef} className="w-xs relative font-urbanist">
            {label && <label className="block mb-2 text-gray-700 font-medium">{label}</label>}
            <div className={`flex items-center justify-between px-4 py-2 border rounded-xl shadow cursor-pointer ${open ? "border-[#003F6B]" : "border-gray-200"} bg-white hover:border-[#003F6B]`} onClick={() => setOpen(!open)}>
                <span className={selectedDate ? "text-black" : "text-gray-400"}>
                    {selectedDate ? showTime ? selectedDate.toLocaleString([], { hour: 'numeric', minute: '2-digit', hour12: true, month: 'long', day: 'numeric', year: 'numeric' }) : selectedDate.toDateString() : `Select ${label?.toLowerCase()}`}
                </span>
                <FiChevronDown className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
            </div>

            {open && (
                <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                    {/* Month & Year Navigation */}
                    <div className="flex justify-between items-center mb-2">
                        <FiChevronLeft className="cursor-pointer" onClick={() => setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1) || setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear)} />
                        <span className="font-medium">{monthNames[currentMonth]} {currentYear}</span>
                        <FiChevronRight className="cursor-pointer" onClick={() => setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1) || setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear)} />
                    </div>

                    {/* Days */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                            <div key={d} className="font-medium text-gray-500">{d}</div>
                        ))}
                        {Array.from({ length: daysInMonth(currentMonth, currentYear) }, (_, i) => i + 1).map((day) => (
                            <div key={day} className={`text-sm cursor-pointer py-1 rounded hover:bg-[#003F6B] hover:text-white transition ${selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear ? "bg-[#003F6B] text-white" : ""}`} onClick={() => handleDateSelect(day)}>
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Time Picker */}
                    {showTime && (
                        <div className="flex items-center space-x-2 mt-2">
                            <SelectInput value={hours} onChange={(e) => setHours(Number(e.target.value))} options={Array.from({ length: 12 }, (_, i) => i + 1)} direction="top" />
                            <span className="text-lg">:</span>
                            <SelectInput value={minutes} onChange={(e) => setMinutes(e.target.value)} options={Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"))} direction="top" />
                            <SelectInput value={amPm} onChange={(e) => setAmPm(e.target.value)} options={["AM", "PM"]} direction="top" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}