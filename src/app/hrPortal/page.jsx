"use client";
import { motion } from "framer-motion";
import { FiRefreshCw, FiPlus, FiClipboard, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function Page() {
  const [selectedStep, setSelectedStep] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Sample real-time data for charts
  const [applicationData, setApplicationData] = useState([
    { name: 'Jan', applications: 120 },
    { name: 'Feb', applications: 190 },
    { name: 'Mar', applications: 150 },
    { name: 'Apr', applications: 210 },
    { name: 'May', applications: 180 },
    { name: 'Jun', applications: 250 },
  ]);

  const [sourceData, setSourceData] = useState([
    { name: 'LinkedIn', value: 35 },
    { name: 'Company Site', value: 25 },
    { name: 'Job Boards', value: 20 },
    { name: 'Referrals', value: 15 },
    { name: 'Other', value: 5 },
  ]);

  const [timeToHireData, setTimeToHireData] = useState([
    { name: 'Week 1', days: 14 },
    { name: 'Week 2', days: 12 },
    { name: 'Week 3', days: 10 },
    { name: 'Week 4', days: 8 },
    { name: 'Week 5', days: 9 },
  ]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];


  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update application data
      setApplicationData(prev => {
        const newData = [...prev];
        const lastMonth = newData[newData.length - 1];
        newData.shift();
        newData.push({
          name: lastMonth.name === 'Jun' ? 'Jul' : 'Jul', // Just for demo
          applications: Math.floor(Math.random() * 100) + 150,
        });
        return newData;
      });

      // Update time to hire data
      setTimeToHireData(prev => {
        const newData = [...prev];
        newData.forEach(item => {
          item.days = Math.max(5, Math.min(15, item.days + (Math.random() > 0.5 ? 1 : -1)));
        });
        return newData;
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);


  const [formData, setFormData] = useState({
    jobTitle: '',
    department: '',
    jobDescription: '',
    qualifications: '',
    minSalary: '',
    maxSalary: '',
    jobType: '',
    deadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
    // Then close popup
    closePopup();
  };

  const handleCardClick = (step) => {
    setSelectedStep(step);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedStep(null);
  };

  const processSteps = [

    // Adding New Postings
    {
      icon: <FiPlus className="text-2xl" />,
      title: "New Posting",
      description: "Easily create and publish job openings to attract top talent. Provide details about roles, responsibilities, and required qualifications to ensure the right candidates apply.",
      popupContent: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Create New Job Posting</h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Senior Frontend Developer"
              />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department *
              </label>
              <select
                id="department"
                name="department"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Department</option>
                <option value="engineering">Engineering</option>
                <option value="marketing">Marketing</option>
                <option value="hr">Human Resources</option>
                <option value="finance">Finance</option>
                <option value="operations">Operations</option>
              </select>
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Job Description *
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the role, responsibilities, and day-to-day activities..."
              />
            </div>

            {/* Qualifications */}
            <div>
              <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-1">
                Required Qualifications *
              </label>
              <textarea
                id="qualifications"
                name="qualifications"
                rows={3}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="List required skills, education, and experience..."
              />
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="minSalary" className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Salary ($)
                </label>
                <input
                  type="number"
                  id="minSalary"
                  name="minSalary"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 60000"
                />
              </div>
              <div>
                <label htmlFor="maxSalary" className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Salary ($)
                </label>
                <input
                  type="number"
                  id="maxSalary"
                  name="maxSalary"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 90000"
                />
              </div>
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type *</label>
              <div className="flex flex-wrap gap-4">
                {['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="radio"
                      id={type}
                      name="jobType"
                      value={type.toLowerCase()}
                      required
                      className="h-4 w-4 text-[#003F6B] focus:ring-[#003F6B]"
                    />
                    <label htmlFor={type} className="ml-2 text-sm text-gray-700">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Deadline */}
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                Application Deadline *
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={closePopup}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#003F6B] text-white rounded-lg hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      )
    },

    // Managing Existing Postings
    {
      icon: <FiClipboard className="text-2xl" />,
      title: "Manage Exist",
      description: "Edit, update, or remove job postings to keep listings accurate and relevant. Track applications, update job descriptions, and modify requirements as needed.",
      popupContent: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Manage Existing Postings</h3>
          <p className="mb-4">Efficiently manage all your current job postings in one place.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Edit job details anytime</li>
            <li>View and manage applications</li>
            <li>Extend or close postings</li>
            <li>Duplicate successful postings</li>
            <li>Track posting performance</li>
          </ul>
        </div>
      )
    },

    // Analytics Data
    {
      icon: <FiRefreshCw className="text-2xl" />,
      title: "Analytics",
      description: "Gain insights into hiring trends, application rates, and job performance. Use data to improve hiring strategies, understand workforce needs, and optimize recruitment efforts.",
      popupContent: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Analytics Dashboard</h3>
            <p className="mb-6">Comprehensive analytics to help you make data-driven hiring decisions.</p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Applications Over Time</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={applicationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="applications"
                      stroke="#003F6B"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Applications"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Application Sources</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Time to Hire (Days)</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={timeToHireData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="days"
                        fill="#00C49F"
                        name="Days to Hire"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-white font-urbanist relative">
      {/* Popup Overlay */}
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl max-w-6xl w-full p-8 relative h-full overflow-y-auto"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX className="text-2xl" />
            </button>
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-[#003F6B] mb-6">
              {selectedStep?.icon}
            </div>
            <div className="prose">
              {selectedStep?.popupContent}
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join the Regional team <span className="text-[#003F6B]">powering the business</span> of all your Home Needs
          </h1>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleCardClick(step)}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-[#003F6B] mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Connector (Desktop Only) */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="h-1 w-2/3 bg-gradient-to-r from-blue-100 via-[#003F6B] to-blue-100 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}