"use client";
import { motion } from "framer-motion";
import { FiRefreshCw, FiPlus, FiClipboard, FiX } from "react-icons/fi";
import { toast } from 'react-toastify';
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
import { Form, Input, Button, Select, DatePicker, Radio, Modal } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

export default function Page() {
  const [selectedStep, setSelectedStep] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

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

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values
        })
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('🎉 Job posted successfully!');
        console.log('Job posted:', data);
        form.resetFields();
        closePopup();
      } else {
        console.error('Failed to post job');
        toast.error('❌ Failed to post job!');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(`⚠️ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
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
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              jobType: 'full-time'
            }}
          >
            {/* Job Title */}
            <Form.Item
              name="jobTitle"
              label="Job Title"
              rules={[{ required: true, message: 'Please input the job title!' }]}
            >
              <Input placeholder="e.g., Senior Frontend Developer" />
            </Form.Item>

            {/* Department */}
            <Form.Item
              name="department"
              label="Department"
              rules={[{ required: true, message: 'Please select a department!' }]}
            >
              <Select placeholder="Select Department">
                <Option value="engineering">Engineering</Option>
                <Option value="marketing">Marketing</Option>
                <Option value="hr">Human Resources</Option>
                <Option value="finance">Finance</Option>
                <Option value="operations">Operations</Option>
              </Select>
            </Form.Item>

            {/* Job Description */}
            <Form.Item
              name="jobDescription"
              label="Job Description"
              rules={[{ required: true, message: 'Please input the job description!' }]}
            >
              <TextArea
                rows={5}
                placeholder="Describe the role, responsibilities, and day-to-day activities..."
              />
            </Form.Item>

            {/* Qualifications */}
            <Form.Item
              name="qualifications"
              label="Required Qualifications"
              rules={[{ required: true, message: 'Please input the required qualifications!' }]}
            >
              <TextArea
                rows={3}
                placeholder="List required skills, education, and experience..."
              />
            </Form.Item>

            {/* Job Type */}
            <Form.Item
              name="jobType"
              label="Job Type"
              rules={[{ required: true, message: 'Please select job type!' }]}
            >
              <Radio.Group>
                <Radio value="full-time">Full-time</Radio>
                <Radio value="part-time">Part-time</Radio>
                <Radio value="contract">Contract</Radio>
                <Radio value="internship">Internship</Radio>
                <Radio value="remote">Remote</Radio>
              </Radio.Group>
            </Form.Item>

            {/* Application Deadline */}
            <Form.Item
              name="deadline"
              label="Application Deadline"
              rules={[{ required: true, message: 'Please select deadline!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            {/* Form Actions */}
            <Form.Item className="flex justify-end space-x-4 pt-4">
              <Button
                onClick={closePopup}
                className="mr-4"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="bg-[#003F6B] hover:bg-[#002b4d]"
              >
                Post Job
              </Button>
            </Form.Item>
          </Form>
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
    <section className="py-20 px-4 font-urbanist relative">
      {/* Popup Modal */}
      <Modal
        title={selectedStep?.title}
        open={isPopupOpen}
        onCancel={closePopup}
        footer={null}
        width={1000}
        centered
        className="rounded-xl"
      >
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-[#003F6B] mb-6">
          {selectedStep?.icon}
        </div>
        <div className="prose">
          {selectedStep?.popupContent}
        </div>
      </Modal>

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
            Join the Regional team <span className="text-gray-400">powering the business</span> of all your Home Needs
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