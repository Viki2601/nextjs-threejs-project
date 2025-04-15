'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer end-to-end construction solutions from planning to execution with a focus on efficiency and innovation.",
  },
  {
    question: "Do you provide custom project designs?",
    answer:
      "Yes, our design team collaborates with clients to deliver tailored solutions that fit specific needs and budgets.",
  },
  {
    question: "How can I get a project estimate?",
    answer:
      "Simply contact us through our website or call our support. We’ll schedule a consultation to discuss your requirements.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="text-white w-full px-6 py-20 font-urbanist">
      <div className="mx-auto space-y-10">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`transition-all duration-300 rounded-xl overflow-hidden ${ activeIndex === idx ? "bg-white text-black" : "" }`}>
            <button onClick={() => toggleFAQ(idx)} className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-4xl">
              {faq.question}
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
