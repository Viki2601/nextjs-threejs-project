"use client";
import Input from "@/common/Input/Input";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiHome, FiGlobe } from "react-icons/fi";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitMessage('Thank you for your message! We will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen font-urbanist mt-26">
            <div className="container mx-auto px-8 py-5 grid lg:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl shadow-lg p-4 md:p-8 h-fit lg:sticky lg:top-24">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input label={"Full Name"} name="name" onChange={handleChange} value={formData?.name} required type="text" />
                        </div>

                        <div>
                            <Input label={"Email"} name="email" onChange={handleChange} value={formData?.email} required type="email" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" value={formData?.message} onChange={handleChange} className="w-full bg-white px-4 py-2 rounded-xl shadow-sm focus:outline-none" required></textarea>
                        </div>

                        <button type="submit" disabled={isSubmitting} className={`w-full cursor-pointer py-3 px-6 rounded-xl text-white font-medium ${isSubmitting ? 'bg-gray-600' : 'bg-[#003F6B]'} transition-colors`}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitMessage && (<p className="text-green-600 text-center mt-4">{submitMessage}</p>)}
                    </form>
                </motion.div>

                {/* Contact Information */}
                <div className="space-y-8 sticky top-52">
                    {/* India Office */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-4 md:p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-100 p-3 rounded-full text-[#003F6B]">
                                <FiHome className="text-lg md:text-2xl" />
                            </div>
                            <h2 className="text-lg md:text-2xl font-bold text-gray-800">Technical Office (India)</h2>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p className="flex items-start gap-3">
                                <FiMapPin className="flex-shrink-0 mt-1 text-[#003F6B]" />
                                <span>MAI House, 238 & 239, Sai Baba Street, Sri Jayanthi Nagar, Pattaravakkam, Chennai, Tamil Nadu - 600055, India</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <FiMail className="text-[#003F6B]" />
                                <span>info@maicorporation.co.in</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <FiPhone className="text-[#003F6B]" />
                                <span>+91 99622 21577</span>
                            </p>
                            <iframe style={{ border: 0, width: "100%", height: "270px", borderRadius: "15px" }} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.698428605279!2d80.17077397507897!3d13.1182811872107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA3JzA1LjgiTiA4MMKwMTAnMjQuMSJF!5e0!3m2!1sen!2sin!4v1733133470718!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </motion.div>

                    {/* UK Office */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white rounded-xl shadow-lg p-4 md:p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-100 p-3 rounded-full text-[#003F6B]">
                                <FiGlobe className="text-lg md:text-2xl" />
                            </div>
                            <h2 className="text-lg md:text-2xl font-bold text-gray-800">Registered Office (UK)</h2>
                        </div>
                        <div className="space-y-4 text-gray-600">
                            <p className="flex items-start gap-3">
                                <FiMapPin className="flex-shrink-0 mt-1 text-[#003F6B]" />
                                <span>1 De La Warr Way, Great Cambourne, Cambridge CB23 6DX UK</span>
                            </p>
                            <iframe style={{ border: 0, width: "100%", height: "270px", borderRadius: "15px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.306275439609!2d-0.07238922313437945!3d52.219653158422744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877d9bdb04f00f5%3A0x8c177b154e5b774c!2s1%20De%20La%20Warr%20Way%2C%20Great%20Cambourne%2C%20Cambourne%2C%20Cambridge%20CB23%206DX%2C%20UK!5e0!3m2!1sen!2sin!4v1691131053233!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}