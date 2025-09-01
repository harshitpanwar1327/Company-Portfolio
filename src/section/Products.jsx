import React from 'react'
import { Element } from 'react-scroll'
import { ProjectsData } from '../utils/ProjectsData'
import { motion } from 'framer-motion'
import { ArrowRight } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { scroller } from "react-scroll"

const Products = () => {
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
          });
        }
      }, 200);
    } else {
      if (section) {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
        });
      }
    }
  };

  return (
    <Element name="products" className='flex flex-col items-center gap-16 p-4'>
      <h2 className='text-black text-5xl font-semibold'>Our Products</h2>

      <div className='w-full lg:w-3/4 flex flex-col gap-10'>
        {ProjectsData.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col lg:flex-row items-center gap-10"
              style={{ zIndex: index }}
            >
              <img src={project.image} alt="Img" className='w-full lg:w-1/2 rounded-xl' />

              <div className='text-black flex flex-col gap-10'>
                <h3 className='text-3xl font-semibold'>{project.title}</h3>
                <p>{project.description}</p>
                <motion.button
                  onClick={() => handleScroll("/contact", "contact")}
                  className="self-start flex items-center bg-[#f0f0f0] p-1 rounded-full font-semibold hover:bg-gray-200 group border border-[#cdcdcd]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
                >
                  <p className='text-black px-3'>Get in touch</p>
                  <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out' />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Element>
  );
};

export default Products;