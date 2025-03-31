"use client";
import { motion } from "framer-motion";
import { FiHeart, FiUsers, FiRefreshCw } from "react-icons/fi";

export default function SABProcess() {
  const processSteps = [
    {
      icon: <FiHeart className="text-2xl" />,
      title: "Help-Line Services",
      description: "Establish a dedicated helpline offering maximum support for individuals and families in need of immediate assistance, guidance, or crisis intervention."
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Well-Trained Counselling Professionals",
      description: "Our Professionals will extend their support for individuals and families in need of immediate assistance, guidance, or crisis intervention."
    },
    {
      icon: <FiRefreshCw className="text-2xl" />,
      title: "Information or Referral Services",
      description: "We shall facilitate appropriate referrals based on the client’s needs. Also offer information about available mental health resources and community support organisations."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white font-urbanist">
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
            Join hands with <span className="text-[#003F6B]">SAB</span> to build strong families
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a positive impact on the world through stronger family foundations
          </p>
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
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
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