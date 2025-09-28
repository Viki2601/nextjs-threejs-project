"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Event from "./Event";

export default function DashBoard() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Follow up with candidate", date: "2025-09-30" },
        { id: 2, title: "Schedule Interview", date: "2025-10-02" },
    ]);
    const [events, setEvents] = useState([
        { id: 1, title: "HR Meeting", date: "2025-10-05", time: "10:30 AM" },
    ]);

    const [isOpenTask, setIsOpenTask] = useState(false);
    const [isOpenEvent, setIsOpenEvent] = useState(false);
    const [newTask, setNewTask] = useState({ title: "", date: "" });
    const [newEvent, setNewEvent] = useState({ title: "", date: "", time: "" });

    const stats = [
        { title: "Total Jobs", value: "12", color: "from-blue-500 to-blue-700" },
        { title: "Applications", value: "134", color: "from-green-500 to-green-700" },
        { title: "Interviews", value: "27", color: "from-purple-500 to-purple-700" },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.2, duration: 0.6, type: "spring" }, }),
        hover: { scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8 },
    };

    const addTask = () => {
        if (!newTask.title.trim() || !newTask.date.trim()) return;
        setTasks([...tasks, { id: Date.now(), ...newTask }]);
        setNewTask({ title: "", date: "" });
        setIsOpenTask(false);
    };

    const addEvent = () => {
        if (!newEvent.title.trim() || !newEvent.date.trim()) return;
        setEvents([...events, { id: Date.now(), ...newEvent }]);
        setNewEvent({ title: "", date: "", time: "" });
        setIsOpenEvent(false);
    };

    return (
        <main className="flex-1 p-6 overflow-y-auto hide-scrollbar">
            <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-extrabold text-[#003F6B]" >
                Welcome 👋
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-2 text-lg text-gray-700 font-medium">
                Join the <span className="font-semibold text-[#003F6B]">Regional team</span> powering the business of all your Home Needs.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stats?.map((stat, i) => (
                    <motion.div key={i} custom={i} initial="hidden" animate="visible" whileHover="hover" variants={cardVariants} className={`relative bg-gradient-to-br ${stat.color} text-white p-8 rounded-2xl shadow-lg overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl" />
                        <div className="relative z-10">
                            <h2 className="text-xl font-semibold">{stat.title}</h2>
                            <p className="mt-4 text-5xl font-extrabold">{stat.value}</p>
                        </div>
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-6 -right-6 w-24 h-24 bg-black/20 rounded-full blur-2xl" />
                        <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#003F6B]/10 rounded-full blur-3xl" />
                    </motion.div>
                ))}
            </div>

            <div className="flex gap-3">
                {/* Task Section */}
                <Event size={"lg"} title={"Task"} modalVariants={modalVariants} data={tasks} add={addTask} isOpen={isOpenTask} setIsOpen={setIsOpenEvent} newData={newTask} setNewData={setNewTask} />
                {/* Event Planner Section */}
                <Event size={"lg"} title={"Event"} modalVariants={modalVariants} data={events} add={addEvent} isOpen={isOpenEvent} setIsOpen={setIsOpenEvent} newData={newEvent} setNewData={setNewEvent} />
            </div>
        </main>
    );
}
