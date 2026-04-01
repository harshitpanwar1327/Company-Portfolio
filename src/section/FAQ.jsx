import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does CodeWeave provide?",
    answer: "CodeWeave specializes in building scalable SaaS products, ERP systems, and custom web applications. We also design and develop modern, high-performance websites for businesses and startups."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We work with both startups and established businesses. Whether you’re validating an idea or scaling an existing product, we help you build reliable and scalable solutions."
  },
  {
    question: "Can you build a complete SaaS product from scratch?",
    answer: "Yes, we can handle everything from idea validation, UI/UX design, development, deployment, to scaling. We act as your complete tech partner."
  },
  {
    question: "How long does it take to build a project?",
    answer: "Project timelines depend on complexity. A simple website may take 1–2 weeks, while a full SaaS platform or ERP system can take 4–12 weeks or more."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer ongoing support, maintenance, and feature upgrades to ensure your product continues to perform and scale smoothly."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies like React, Node.js, and scalable cloud infrastructure to build fast, secure, and reliable applications."
  },
  {
    question: "Can you improve or redesign an existing website or product?",
    answer: "Absolutely. We can redesign your UI/UX, optimize performance, fix issues, and add new features to your existing product."
  },
  {
    question: "How much does a project cost?",
    answer: "Pricing depends on the scope and complexity of the project. We offer flexible pricing based on your requirements and budget."
  },
  {
    question: "Will my website or SaaS product be SEO-friendly?",
    answer: "Yes, we follow best practices for SEO, performance optimization, and accessibility to ensure your product ranks well and performs efficiently."
  },
  {
    question: "How do we get started with CodeWeave?",
    answer: "You can contact us through our website or schedule a call. We’ll discuss your idea, requirements, and suggest the best approach to build your product."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24 px-4 text-black flex flex-col gap-8 md:gap-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">Everything you need to know</h2>
      <div className="flex flex-col gap-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-500 shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-gray-800 shrink-0" />
              )}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <Motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </Motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ