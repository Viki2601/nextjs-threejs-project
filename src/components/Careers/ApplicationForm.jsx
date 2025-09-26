import SelectInput from "@/common/Input/SelectInput";

export default function ApplicationForm({ handleChange, handleSubmit, formData, setFormData }) {
    return (
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <input
                name="name"
                value={formData?.name}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 shadow border focus:outline-none focus:border-[#003F6B] border-gray-100 rounded-xl"
                onChange={handleChange}
                required
            />

            {/* Email */}
            <input
                name="email"
                value={formData?.email}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 shadow border focus:outline-none focus:border-[#003F6B] border-gray-100 rounded-xl"
                onChange={handleChange}
                required
            />

            {/* Phone */}
            <input
                name="phone"
                value={formData?.phone}
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 shadow border focus:outline-none focus:border-[#003F6B] border-gray-100 rounded-xl"
                onChange={handleChange}
                required
            />

            {/* Location */}
            <input
                name="location"
                value={formData?.location}
                type="text"
                placeholder="Current Location / City"
                className="w-full px-4 py-2 shadow border focus:outline-none focus:border-[#003F6B] border-gray-100 rounded-xl"
                onChange={handleChange}
                required
            />

            {/* Experience */}
            <SelectInput
                label="Experience"
                name="experience"
                value={formData?.experience}
                options={["Fresher", "0-1 Year", "2-5 Years", "5+ Years"]}
                onChange={handleChange}
            />

            {/* Gender */}
            <SelectInput
                label="Gender"
                name="gender"
                value={formData?.gender}
                options={["Male", "Female", "Other"]}
                onChange={handleChange}
            />

            {/* Notice Period */}
            <SelectInput
                label="Notice Period"
                name="noticePeriod"
                value={formData?.noticePeriod}
                options={["Immediate Joiner", "15 Days", "30 Days", "60 Days", "90+ Days"]}
                onChange={handleChange}
            />

            {/* Education */}
            <SelectInput
                label="Highest Qualification"
                name="education"
                value={formData?.education}
                options={["High School / 10th", "Higher Secondary / 12th", "Diploma", "Bachelor’s Degree", "Master’s Degree", "Doctorate / PhD", "Post Doctorate", "Other"]}
                onChange={handleChange}
            />

            {/* Portfolio/LinkedIn */}
            <input
                name="portfolio"
                value={formData?.portfolio}
                type="url"
                placeholder="Portfolio / LinkedIn / GitHub URL"
                className="w-full px-4 py-2 shadow border focus:outline-none focus:border-[#003F6B] border-gray-100 rounded-xl col-span-2"
                onChange={handleChange}
            />

            {/* Expected Salary */}
            <input
                name="expectedSalary"
                value={formData?.expectedSalary}
                type="text"
                placeholder="Expected Salary / CTC"
                className="w-full px-4 py-2 shadow border focus:outline-none focus:border-[#003F6B] border-gray-100 rounded-xl"
                onChange={handleChange}
            />

            {/* Date of Birth */}
            <input
                name="dob"
                value={formData?.dob}
                type="date"
                className="w-full px-4 py-2 shadow border focus:outline-none focus:border-[#003F6B] border-gray-100 rounded-xl"
                onChange={handleChange}
            />

            {/* Cover Letter */}
            <textarea
                name="message"
                value={formData?.message}
                placeholder="Cover Letter"
                className="w-full px-4 py-2 shadow border border-gray-100 focus:outline-none focus:border-[#003F6B] rounded-xl resize-none col-span-2"
                rows="4"
                onChange={handleChange}
                required
            ></textarea>

            {/* Resume */}
            <input
                name="resume"
                type="file"
                id="resumeInput"
                accept=".pdf,.doc,.docx"
                className="cursor-pointer w-full px-4 py-2 shadow border border-gray-100 focus:outline-none focus:border-[#003F6B] rounded-xl bg-gray-100 col-span-2"
                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                required
            />

            {/* Submit */}
            <button type="submit" className="cursor-pointer col-span-2 w-full bg-[#003F6B] text-white py-2 px-4 rounded-xl hover:bg-[#002c4d] transition">
                Submit Application
            </button>
        </form>
    )
}