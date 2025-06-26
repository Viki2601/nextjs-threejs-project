// app/components/ClientWrapper.jsx
"use client";

import dynamic from "next/dynamic";
import CubeCanvas from "./CubeCanvas";

// Dynamically import CubeScene with no SSR
const CubeScene = dynamic(() => import("./CubeScene"), { ssr: false });

export default function ClientWrapper() {
    return (
        <div className=" flex items-center justify-center w-full">
            <CubeCanvas />
        </div>
    )
}
