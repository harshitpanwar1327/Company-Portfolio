import React from 'react'
import { ArrowRight } from "lucide-react"
import { motion } from 'motion/react'
import { useNavigate, useLocation } from "react-router-dom"
import { scroller } from "react-scroll"

const Advertisement = () => {
  const text = "Ready to Achieve Your Goals?";
  const letters = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.02,
        delayChildren: 0.02 * i,
      },
    }),
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (route, section) => {
    if (location.pathname !== route) {
      navigate(route);

      setTimeout(() => {
        if (section) {
          scroller.scrollTo(section, {
            smooth: true,
            duration: 600,
            offset: -80,
          });
        }
      }, 200);
    } else {
      if (section) {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -80,
        });
      }
    }
    setOpenNav(false);
  };

  return (
    <div className="h-[90vh] md:h-[50vh] lg:h-[90vh] bg-[url(/src/assets/advertisement.jpg)] bg-cover bg-center flex flex-col items-center justify-center gap-8 text-center p-4">
      <motion.h2 className="text-4xl md:text-5xl lg:text-6xl text-white"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>
      <motion.p className="md:text-xl"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1}}
      >
        I’ll help you reach new heights and stay ahead of the competition.
      </motion.p>
      <motion.button onClick={() => handleScroll("/contact", "contact")} className="flex items-center bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1.2}}
      >
        <p className='text-black px-5'>Let's talk</p>
        <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
      </motion.button>
    </div>
  )
}

export default Advertisement