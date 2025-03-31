"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function InnovativeFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "1. Share Your Story Through Us",
      answer: "Inspire others by sharing your personal experiences and challenges in building strong family bonds. Your story may resonate with others, providing a source of encouragement and connection."
    },
    {
      question: "2. Foster Open Communication",
      answer: "Practise active listening and open communication within your family, creating an environment where every member feels heard and valued."
    },
    {
      question: "3. Prioritise Well-being",
      answer: "Emphasise the importance of self and others' well-being. By focusing on holistic health, we contribute to the overall strength of families. Check out families around you and identify opportunities to offer support or create connections within your local community."
    },
    {
        question: "4. Join our Regular Programs",
        answer: "Engage in educational programs conducted by SAB to enhance your understanding of family dynamics and relationship-building. By becoming more knowledgeable, you can contribute to a culture of shared wisdom within the community."
      },
      {
        question: "5. Host SAB Events in Your Community",
        answer: "Take the initiative to organise SAB events in your local community. Whether it's a workshop, seminar, or awareness campaign, hosting events allows you to actively contribute to the dissemination of knowledge and support."
      },
      {
        question: "6. Collaborate with Local Communities",
        answer: "Extend SAB's reach by collaborating with local communities. Partner with schools, community centres, or other organisations to bring awareness and resources to families at a grassroots level."
      },
      {
        question: "7. Support SAB Partnerships",
        answer: "Explore and support SAB's partnerships with other organisations and businesses dedicated to family well-being. By endorsing and participating in these collaborations, you contribute to a broader network focused on building strong families"
      },
      {
        question: "8. Volunteer Counselling Services",
        answer: "If you are an expert in counselling, or if you hold a degree in psychology or related fields, consider volunteering your expertise to provide support and guidance to families facing challenges"
      },
  ];

  const toggleFAQ = (index) => {
    if (index >= 0 && index < faqs.length) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="py-20 px-4 bg-white font-urbanist">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          How to Get Involved & Make a Difference
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={`faq-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className={`p-8 rounded-2xl shadow-md cursor-pointer transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-white shadow-lg" 
                    : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <FiChevronUp className="text-[#003F6B] text-xl" />
                  ) : (
                    <FiChevronDown className="text-[#003F6B] text-xl" />
                  )}
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}