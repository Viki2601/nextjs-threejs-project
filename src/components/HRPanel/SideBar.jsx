export default function SideBar({ setActivePage }) {
    return (
        <aside className="w-64 bg-[#003F6B] text-white flex flex-col rounded-r-4xl shadow-xl backdrop-blur-2xl">
            <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-white/20">
                HR Panel
            </div>
            <nav className="flex-1 p-4 space-y-2">
                <button onClick={() => setActivePage("dashboard")} className="w-full text-left px-4 py-2 rounded-md hover:bg-[#002c4d] transition">Dashboard</button>
                <button onClick={() => setActivePage("jobs")} className="w-full text-left px-4 py-2 rounded-md hover:bg-[#002c4d] transition">Job Postings</button>
                <button onClick={() => setActivePage("applications")} className="w-full text-left px-4 py-2 rounded-md hover:bg-[#002c4d] transition">Applications</button>
                {/* <button onClick={() => setActivePage("analytics")} className="w-full text-left px-4 py-2 rounded-md hover:bg-[#002c4d] transition">Analytics</button>
                <button onClick={() => setActivePage("settings")} className="w-full text-left px-4 py-2 rounded-md hover:bg-[#002c4d] transition">Settings</button> */}
            </nav>
            <div className="p-4 border-t border-white/20">
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#002c4d] transition">Logout</button>
            </div>
        </aside>
    );
}