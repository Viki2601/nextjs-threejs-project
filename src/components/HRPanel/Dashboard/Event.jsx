import { IoIosAddCircle } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import AdvancedDate from "@/common/Input/Date";
import Input from "@/common/Input/Input";

export default function Event({ modalVariants, data, isOpen, setIsOpen, newData, setNewData, add, title, size }) {
    return (
        <>
            <div className={`w-md border border-gray-200 p-4 rounded-2xl bg-gray-50 shadow-inner`}>
                <div className="flex items-center justify-between shadow-lg p-2 px-2 bg-white rounded-xl">
                    <h2 className="text-xl font-bold text-[#003F6B]">{title} Planner</h2>
                    <IoIosAddCircle size={36} onClick={() => setIsOpen(true)} className="cursor-pointer" />
                </div>

                {/* Event List */}
                <ul className="mt-6 space-y-4 h-54 overflow-y-auto hide-scrollbar rounded-xl">
                    {data?.length > 0 ? (
                        data?.map((event) => (
                            <motion.li key={event?.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="p-4 rounded-xl bg-white shadow flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-gray-800">{event?.title}</p>
                                    <span className="text-sm text-gray-500">
                                        📅 {new Date(event?.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                                        {" "}⏰{" "}
                                        {event?.time ? event?.time : new Date(event?.date).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
                                    </span>
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
                    <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md" initial="hidden" animate="visible" exit="exit" variants={modalVariants}>
                            <h3 className="text-xl font-bold text-[#003F6B] mb-4">Create {title}</h3>
                            <div className="space-y-2 my-2">
                                <Input label={`Title`} name={"title"} onChange={(e) => setNewData({ ...newData, title: e.target.value })} value={newData?.title} type="text" required />
                                <AdvancedDate size={size} label={"Schedule"} name={"date"} onChange={(e) => setNewData({ ...newData, date: e.target.value })} value={newData?.date} showTime={true} />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button onClick={() => setIsOpen(false)} className="cursor-pointer px-4 py-1 bg-gray-300 rounded-full hover:bg-gray-400 transition">
                                    Cancel
                                </button>
                                <button onClick={add} className="cursor-pointer px-4 py-1 bg-[#003F6B] text-white rounded-full shadow hover:bg-[#004f85] transition" >
                                    + Add
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}