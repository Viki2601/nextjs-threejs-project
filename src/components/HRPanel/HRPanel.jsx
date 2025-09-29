'use client'
import { useState } from "react";
import DashBoard from "./Dashboard/DashBoard";
import SideBar from "./SideBar";
import JobPosting from "./JobListing/JobPosting";
import Applications from "./Applications/Applications";

export default function HRPanel() {
    const [activePage, setActivePage] = useState("dashboard");

    const renderPage = () => {
        switch (activePage) {
            case "dashboard": return <DashBoard />;
            case "applications": return <Applications />;
            case "jobs": return <JobPosting />;
            default: return <DashBoard />;
        }
    };

    return (
        <div className="flex h-screen bg-[#e3ddcb] font-urbanist">
            <SideBar setActivePage={setActivePage} />
            <div className="flex-1">{renderPage()}</div>
        </div>
    );
}