'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobById } from '@/store/jobSlice';
import ApplicationForm from './ApplicationForm';
import { submitApplication } from '@/store/applicationsSlice';

export default function CareerDetails({ slug }) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { currentJob, loading } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobById(slug));
    }, [dispatch, slug]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        gender: '',
        noticePeriod: '',
        education: '',
        portfolio: '',
        expectedSalary: '',
        dob: '',
        message: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("jobId", currentJob?._id);
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("location", formData.location);
        data.append("experience", formData.experience);
        data.append("gender", formData.gender);
        data.append("noticePeriod", formData.noticePeriod);
        data.append("education", formData.education);
        data.append("portfolio", formData.portfolio);
        data.append("expectedSalary", formData.expectedSalary);
        data.append("dob", formData.dob);
        data.append("message", formData.message);
        data.append("resume", formData.resume);

        try {
            dispatch(submitApplication({
                jobId: currentJob?._id,
                ...formData,
            }));
            toast.success("Application submitted successfully!");
            setIsOpen(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                location: '',
                experience: '',
                gender: '',
                noticePeriod: '',
                education: '',
                portfolio: '',
                expectedSalary: '',
                dob: '',
                message: '',
                resume: null,
            });
        } catch (error) {
            toast.error("An error occurred.");
        }
    };


    if (loading) return <div className="text-center text-white p-5">Loading...</div>;

    return (
        <div className="mt-24 text-white w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-10 py-5 font-urbanist">
            {/* Left Side: Job Info */}
            <div className='w-full flex justify-between items-start space-y-6'>
                <div className='max-w-3xl space-y-6 w-full'>
                    <h1 className="text-4xl font-bold">{currentJob?.jobTitle}</h1>
                    <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                        Location : Onsite - Pattaravakkam, Chennai.
                    </motion.p>
                    <ul className="bg-white p-3 text-[#003F6B] rounded-xl shadow-xl font-semibold space-y-1">
                        {currentJob?.jobDescription}
                    </ul>
                    <div className="text-sm bg-white text-black px-4 py-1 rounded-full w-fit capitalize">
                        {currentJob?.jobType}
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Qualifications and Skills:</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            {currentJob?.qualifications.split('.').map((point, index) => (
                                point.trim() && <li key={index}>{point.trim()}</li>
                            ))}
                        </ul>
                    </div>
                    <p><strong>Deadline:</strong> {new Date(currentJob?.deadline).toLocaleDateString()}</p>
                </div>
                <button onClick={() => setIsOpen(true)} className="mt-6 bg-[#003F6B] border border-white py-2 px-6 rounded-md hover:bg-[#002c4d] transition">
                    Apply Now
                </button>
            </div>

            {/* Right Side: Application Form */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex justify-center items-center z-50">
                    <div className="bg-white text-black rounded-lg shadow-lg p-8 w-full max-w-2xl h-[calc(100vh-80px)] overflow-auto hide-scrollbar relative">
                        {/* Close Button */}
                        <div className='flex items-start justify-between'>
                            <h2 className="text-2xl font-bold mb-4 text-[#003F6B]">Apply For {currentJob?.jobTitle}</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black">
                                ✕
                            </button>
                        </div>
                        <ApplicationForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
                    </div>
                </div>
            )}

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
}