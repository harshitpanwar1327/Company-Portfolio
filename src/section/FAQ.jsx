import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Data Block Solution?",
    answer: "Data Block Solution (DBS) is our flagship security software that prevents unauthorized data transfers, blocks USB and Bluetooth sharing, and provides organizations with full control over data flow through monitoring and reporting."
  },
  {
    question: "What is your Real Estate Website project about?",
    answer: "Our Real Estate Website is a modern property platform that allows users to explore property listings, connect with sellers, and manage inquiries through an integrated admin dashboard."
  },
  {
    question: "What services do you offer?",
    answer: "We provide end-to-end digital solutions, including responsive Web Development, Windows Application Development, and UI/UX design using Figma."
  },
  {
    question: "Who are your solutions for?",
    answer: "Our solutions cater to individuals, startups, and enterprises. Whether you need a secure enterprise tool like DBS, a property listing platform, or custom development services, we tailor our offerings to your needs."
  },
  {
    question: "Can I get a customized solution for my business?",
    answer: "Yes, we offer fully customized software solutions in web, desktop, and design domains to ensure that your business requirements are met effectively."
  },
  {
    question: "What makes your services different?",
    answer: "Unlike generic agencies, we focus on blending security, scalability, and user experience. From robust desktop apps to visually stunning Figma prototypes, we ensure innovation at every step."
  },
  {
    question: "Do you provide after-sales support?",
    answer: "Absolutely. We provide ongoing support and maintenance for our software products, as well as assistance for web and design projects to ensure long-term reliability."
  },
  {
    question: "How can I get started?",
    answer: "You can reach out via our website, WhatsApp, or email. Based on your requirements, our team will provide you with a consultation, a tailored proposal, and next steps."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-30 py-30 px-4 md:px-12 lg:px-20 text-black flex flex-col gap-4">
      <p className="text-center text-gray-500">FAQ</p>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">Everything you need to know</h2>
      <div className="flex flex-col gap-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-800" />
              )}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ