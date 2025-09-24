'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';

export default function CareerDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_PROD}/${id}`);
                const data = await response.json();
                setJob(data);
            } catch (err) {
                console.error("Error loading job:", err);
            }
        };
        if (id) fetchJob();
    }, [id]);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
        data.append("jobId", id);
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("message", formData.message);
        data.append("resume", formData.resume);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_PROD}/apply`, {
                method: 'POST',
                body: data,
            });

            if (res.ok) {
                toast.success("Application submitted successfully!");
                setFormData({ name: '', email: '', phone: '', message: '', resume: null });
                document.getElementById("resumeInput").value = '';
            } else {
                toast.error("Failed to submit application.");
            }
        } catch (error) {
            toast.error("An error occurred.");
        }
    };



    if (!job) return <div className="text-center text-white p-5">Loading...</div>;

    return (
        <div className="text-white w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-10 py-5 font-urbanist">
            {/* Left Side: Job Info */}
            <div className='max-w-2xl space-y-6 w-full'>
                <h1 className="text-4xl font-bold">{job.jobTitle}</h1>
                <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                    Location : Onsite - Pattaravakkam, Chennai.
                </motion.p>
                <ul className="space-y-1">
                    {job.jobDescription}
                </ul>
                <div className="text-sm bg-white text-black px-4 py-1 rounded-full w-fit capitalize">
                    {job.jobType}
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Qualifications and Skills:</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {job.qualifications.split('.').map((point, index) => (
                            point.trim() && <li key={index}>{point.trim()}</li>
                        ))}
                    </ul>
                </div>
                <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
            </div>

            {/* Right Side: Application Form */}
            <div className="bg-white sticky top-20 text-black rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input name="name" value={formData.name} type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" onChange={handleChange} required />
                    <input name="email" value={formData.email} type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" onChange={handleChange} required />
                    <input name="phone" value={formData.phone} type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded-md" onChange={handleChange} required />
                    <textarea name="message" value={formData.message} placeholder="Cover Letter" className="w-full px-4 py-2 border rounded-md resize-none" rows="4" onChange={handleChange} required></textarea>
                    <input name="resume" type="file" id="resumeInput" accept=".pdf,.doc,.docx" className="w-full px-4 py-2 border rounded-md bg-gray-100" onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} required />
                    <button type="submit" className="w-full bg-[#003F6B] text-white py-2 px-4 rounded-md hover:bg-[#002c4d] transition">
                        Submit Application
                    </button>
                </form>
            </div>
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
}