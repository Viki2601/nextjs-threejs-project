'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Worktops from "@/app/assets/landing/Worktops.png";
import Myproject from "@/app/assets/landing/Myproject.png";


const Services = () => {
    const [activeTab, setActiveTab] = useState('strategy');

    return (
        <section className="bg-white min-h-screen w-full px-10 py-20 relative font-urbanist">
            <div className="mx-auto">
                <motion.h1
                    className="text-6xl font-bold text-black mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Services
                </motion.h1>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.button
                        className={`text-left pb-4 ${activeTab === 'worktops' ? 'border-b-4 border-black' : 'opacity-50'}`}
                        onClick={() => setActiveTab('worktops')}
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: activeTab === 'worktops' ? 1 : 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Work-Tops.com</h2>
                    </motion.button>

                    <motion.button
                        className={`text-left pb-4 ${activeTab === 'myproject' ? 'border-b-4 border-black' : 'opacity-50'}`}
                        onClick={() => setActiveTab('myproject')}
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: activeTab === 'myproject' ? 1 : 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Myproject.ai</h2>
                    </motion.button>

                    <motion.button
                        className={`text-left pb-4 ${activeTab === 'dc' ? 'border-b-4 border-black' : 'opacity-50'}`}
                        onClick={() => setActiveTab('dc')}
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: activeTab === 'dc' ? 1 : 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Dragon Customer</h2>
                    </motion.button>
                </div>

                <div className="relative min-h-[400px]">
                    {/* Strategy Content */}
                    {activeTab === 'worktops' && (
                        <motion.div
                            className="grid md:grid-cols-2 gap-12"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <p className="text-xl leading-relaxed mb-8">
                                    We're your strategic partner, deeply understanding your brand's essence with a dedicated product owner for each project, crafting personalized, data-informed strategies that put you ahead of the competition.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    src={Worktops}
                                    alt="Worktops"
                                    width={500}
                                    height={400}
                                    className="rounded-xl border object-cover"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Creative Content */}
                    {activeTab === 'myproject' && (
                        <motion.div
                            className="grid md:grid-cols-2 gap-12"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <p className="text-xl leading-relaxed mb-8">
                                    From wireframe to post-launch optimisation, our designers are there every step of the way. We strive for a perfect balance between conversion and brand experience, all while prioritizing mobile-first design.
                                </p>
                                <motion.a
                                    href="#"
                                    className="inline-block border-b-2 border-black pb-1 font-medium"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    click here
                                </motion.a>
                            </div>
                            <div className="border-t border-gray-200 pt-8 md:pt-0 md:border-t-0 md:border-l md:pl-8 flex items-center">
                                {/* Placeholder for creative content */}
                            </div>
                        </motion.div>
                    )}

                    {/* Technology Content */}
                    {activeTab === 'dc' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Technology content would go here */}
                            <p className="text-xl">Technology services content coming soon...</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;