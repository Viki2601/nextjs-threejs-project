"use client";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Sphere, Torus, Box, Stars } from "@react-three/drei";
// import * as THREE from "three";
import { useRef } from "react";
import Founder from "@/app/assets/landing/GMSFounder.png";
import Image from "next/image";
import { motion } from "framer-motion";

// ThreeBackground Component
function FloatingElements() {
    const elements = [
        { ref: useRef(), type: 'sphere', size: [1, 32, 32], pos: new THREE.Vector3(-3, 0, -5), vel: new THREE.Vector3(0.01, 0.02, 0.015), color: "#00a8ff" },
        { ref: useRef(), type: 'torus', size: [1, 0.4, 16, 32], pos: new THREE.Vector3(3, 0, -5), vel: new THREE.Vector3(-0.015, 0.01, 0.02), color: "#ff6b6b" },
        { ref: useRef(), type: 'box', size: [1.5, 1.5, 1.5], pos: new THREE.Vector3(0, 0, -7), vel: new THREE.Vector3(0.02, -0.015, 0.01), color: "#4cd137" }
    ];

    const boundary = 5; // Movement boundary
    const bounceFactor = 0.8; // Bounce intensity

    useFrame(() => {
        elements.forEach(element => {
            // Update position
            element.pos.add(element.vel);

            // Boundary checks with bounce
            if (element.pos.x > boundary || element.pos.x < -boundary) {
                element.vel.x *= -bounceFactor;
                element.pos.x = THREE.MathUtils.clamp(element.pos.x, -boundary, boundary);
            }
            if (element.pos.y > boundary || element.pos.y < -boundary) {
                element.vel.y *= -bounceFactor;
                element.pos.y = THREE.MathUtils.clamp(element.pos.y, -boundary, boundary);
            }
            if (element.pos.z > -3 || element.pos.z < -10) {
                element.vel.z *= -bounceFactor;
                element.pos.z = THREE.MathUtils.clamp(element.pos.z, -10, -3);
            }

            // Apply position to object
            element.ref.current.position.copy(element.pos);

            // Gentle rotation
            element.ref.current.rotation.x += element.vel.y * 0.1;
            element.ref.current.rotation.y += element.vel.x * 0.1;
        });

        // Simple collision avoidance
        for (let i = 0; i < elements.length; i++) {
            for (let j = i + 1; j < elements.length; j++) {
                const distance = elements[i].pos.distanceTo(elements[j].pos);
                const minDistance = 2.5; // Minimum distance between objects

                if (distance < minDistance) {
                    const direction = new THREE.Vector3()
                        .subVectors(elements[i].pos, elements[j].pos)
                        .normalize()
                        .multiplyScalar(0.02);

                    elements[i].vel.add(direction);
                    elements[j].vel.sub(direction);
                }
            }
        }
    });

    return (
        <>
            {elements.map((element, idx) => (
                element.type === 'sphere' ? (
                    <Sphere key={idx} ref={element.ref} args={element.size}>
                        <meshStandardMaterial
                            color={element.color}
                            emissive={element.color}
                            emissiveIntensity={0.5}
                            metalness={0.8}
                            roughness={0.2}
                        />
                    </Sphere>
                ) : element.type === 'torus' ? (
                    <Torus key={idx} ref={element.ref} args={element.size}>
                        <meshStandardMaterial
                            color={element.color}
                            emissive={element.color}
                            emissiveIntensity={0.3}
                            metalness={0.7}
                            roughness={0.3}
                        />
                    </Torus>
                ) : (
                    <Box key={idx} ref={element.ref} args={element.size}>
                        <meshStandardMaterial
                            color={element.color}
                            emissive={element.color}
                            emissiveIntensity={0.4}
                            metalness={0.6}
                            roughness={0.4}
                        />
                    </Box>
                )
            ))}
        </>
    );
}

// export function ThreeBackground() {
//     return (
//         <Canvas
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 zIndex: -1,
//                 width: "100vw",
//                 height: "100vh",
//             }}
//             camera={{ position: [0, 0, 10], fov: 50 }}
//         >
//             <ambientLight intensity={0.3} />
//             <pointLight position={[10, 10, 10]} intensity={1} />
//             <directionalLight position={[0, 5, 5]} intensity={0.5} />

//             <Stars radius={100} depth={50} count={5000} factor={4} fade speed={0.5} />
//             {/* <FloatingElements /> */}
//         </Canvas>
//     );
// }

// Main Page Component
export default function AboutPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* 3D Background */}
            {/* <ThreeBackground /> */}

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="px-8 py-4 text-white bg-black/30 backdrop-blur-lg font-urbanist w-full h-screen space-y-8 flex flex-col justify-center items-center"
            >
                <h1 className="font-bold text-5xl">About MAI</h1>
                <h2 className="text-start font-semibold text-2xl">Bringing The Whole Space Together</h2>
                <ul className="w-full lg:w-4/5 text-md font-light space-y-2">
                    <li>
                        <span className="font-semibold text-lg">MAI transforms your house into a home</span> by taking care of all your projects, from simple to difficult ones, including painting, furnishing, bathroom upscaling, kitchen remodeling, stone worktop installations, and much more.
                    </li>
                    <li>With MAI, locating an expert in the industry you can rely on is no more challenging. Our advanced Artificial Intelligence helps you select the right fit for your project with confidence.</li>
                    <li>MAI enables potential individuals and companies to connect with a large network of thirsty project owners.</li>
                    <li>We have helped thousands of individuals to pursue their professional aspirations, start their own enterprises from scratch.</li>
                    <li>
                        Numerous traders say - <span className="font-semibold text-lg">MAI has not just given me financial and professional freedom but has also made me fall in love with my work life.</span>
                    </li>
                </ul>
            </motion.div>

            {/* Founder Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-white font-urbanist flex md:flex-row flex-col items-center"
            >
                <Image src={Founder} alt="GMS" width={1000} height={1000} className="object-cover" />
                <div className="w-full lg:w-1/2 mx-5 p-5 bg-black/30 backdrop-blur-lg md:rounded-2xl space-y-5">
                    <h2 className="text-3xl">About the Founder</h2>
                    <p>
                        Our founder, G.M.S, stands out as the first generation to successfully establish a network with experts throughout the UK in this period of generational hierarchy. With his ground research in the field for more than a decade, he has endeavored persistently, overcoming tons of challenges to make this website a reality from concept. He visioned a dream that is alive today and helps millions fulfill theirs.
                    </p>
                    <p className="text-lg font-semibold">Check him out on LinkedIn</p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-8 py-1 bg-white text-md text-[#003F6B] rounded-lg"
                    >
                        Connect
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}