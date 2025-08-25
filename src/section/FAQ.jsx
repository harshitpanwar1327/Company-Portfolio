import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  
  {
    question: "What kind of training plans do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta ea maiores possimus suscipit architecto illo praesentium? Est, consequatur architecto."
  },
  {
    question: "How do I know if I'm ready to start training?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta ea maiores possimus suscipit architecto illo praes."
  },
  {
    question: "Can I train with you if I'm not local?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta ea maiores possimus suscipit architecto illo praesentium? Est, consequat."
  },
  {
    question: "How often will I train, and how long are the sessions?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta ea maiores possimus suscipit architecto illo praesentium? Est, consequatur architecto."
  },
  {
    question: "What equipment do I need to get started?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta ea maiores possimus suscipit architecto illo praesentium? Est."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-25 mx-16 p-6 bg-white text-black space-y-2">
      <p className="text-center text-gray-500">FAQ</p>
      <h2 className="text-5xl font-semibold text-center mt-8 mb-20">Everything you need to know</h2>
      <div className="space-y-14">
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