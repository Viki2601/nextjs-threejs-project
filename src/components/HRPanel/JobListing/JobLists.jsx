import { deleteJob, fetchJobs } from "@/store/jobSlice";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function JobLists({ onEdit }) {
    const dispatch = useDispatch();
    const { jobs, loading } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    const handleDelete = async (slug) => {
        try {
            dispatch(deleteJob(slug));
            toast.success('Job Post Deleted!');
            dispatch(fetchJobs());
        } catch (error) {
            toast.error('Failed to Delete job!');
        }
    };

    return (
        <div>
            {loading ? (
                <p className="flex items-center justify-center h-[calc(100vh-250px)] text-2xl font-semibold">Loading jobs...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobs?.map((job, index) => (
                        <div key={index} className="bg-white relative shadow-md p-4 rounded-xl capitalize">
                            <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
                            <p className="text-gray-600 mb-2">{job.department}</p>
                            <div className="flex items-center gap-2">
                                <p className="px-3 p-1 w-fit rounded-xl text-xs font-semibold bg-amber-100">{job.jobType}</p>
                                <p className="px-3 p-1 w-fit rounded-xl text-xs font-semibold bg-amber-100">{new Date(job.deadline).toLocaleDateString()}</p>
                            </div>
                            <p className="mt-2 text-sm text-gray-700 line-clamp-3">{job.jobDescription}</p>
                            <div className="absolute top-5 right-5 space-y-3 flex gap-2">
                                <RiEdit2Fill className="cursor-pointer text-xl font-bold text-[#003F6B] rounded-md hover:text-blue-600" onClick={() => onEdit(job)} />
                                <FaTrash className="cursor-pointer text-xl font-bold text-[#003F6B] rounded-md hover:text-red-600" onClick={() => handleDelete(job?.slug)} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}