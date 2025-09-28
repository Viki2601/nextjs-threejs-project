import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export default function Event({ modalVariants, data, isOpen, setIsOpen, newData, setNewData, add, size, title }) {

    return (
        <>
            <div className={`mt-12 ${`w-${size}`} border border-gray-200 p-4 rounded-2xl bg-gray-50 shadow-inner`}>
                <div className="flex items-center justify-between shadow-lg p-2 px-2 bg-white rounded-xl">
                    <h2 className="text-2xl font-bold text-[#003F6B]">{title} Planner</h2>
                    <IoIosAddCircle size={36} onClick={() => setIsOpen(true)} className="cursor-pointer" />
                </div>

                {/* Event List */}
                <ul className="mt-6 space-y-4 h-54 overflow-y-auto hide-scrollbar rounded-xl">
                    {data.length > 0 ? (
                        data.map((event) => (
                            <motion.li key={event.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="p-4 rounded-xl bg-white shadow flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-gray-800">{event.title}</p>
                                    <span className="text-sm text-gray-500">📅 {event.date} ⏰ {event.time}</span>
                                </div>
                            </motion.li>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No events yet. Add one!</p>
                    )}
                </ul>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" initial="hidden" animate="visible" exit="exit" variants={modalVariants}>
                        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
                            <h3 className="text-xl font-bold text-[#003F6B] mb-4">Create Event</h3>
                            <input
                                type="text"
                                placeholder="Event Title"
                                value={newData.title}
                                onChange={(e) => setNewData({ ...newData, title: e.target.value })}
                                className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#003F6B]"
                            />
                            <input
                                type="date"
                                value={newData.date}
                                onChange={(e) => setNewData({ ...newData, date: e.target.value })}
                                className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#003F6B]"
                            />
                            <input
                                type="time"
                                value={newData.time}
                                onChange={(e) => setNewData({ ...newData, time: e.target.value })}
                                className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#003F6B]"
                            />
                            <div className="flex justify-end space-x-3">
                                <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition">
                                    Cancel
                                </button>
                                <button onClick={add} className="px-4 py-2 bg-[#003F6B] text-white rounded-lg shadow hover:bg-[#004f85] transition" >
                                    Save Event
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}