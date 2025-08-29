import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer.jsx'
import Advertisement from '../section/Advertisement'
import FAQ from '../section/FAQ'
import Reviews from '../section/Reviews'
import Products from '../section/Products'
import About from '../section/About'
import { ArrowRight } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { scroller } from "react-scroll"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import hero2 from "../assets/hero2.jpg"
import { motion } from 'motion/react'

const Hero = () => {
  const text = "Innovating Secure & \nSmart Digital \nSolutions";
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <>
      <div className="w-screen min-h-[100vh] px-4 md:px-12 lg:px-20 pb-8 bg-[url(/src/assets/hero.jpg)] bg-cover bg-center flex flex-col justify-between gap-16">
        <Navigation />

        <div className="flex flex-col gap-3 text-white">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={child}>
                {letter === " " ? "\u00A0" : letter === "\n" ? <br /> : letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p className="text-lg my-6 md:w-2/3 lg:w-1/2"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1}}
          >From enterprise-grade security to modern web platforms, we craft solutions that power businesses, protect data, and inspire growth.</motion.p>

          <motion.button onClick={() => handleScroll("/contact", "contact")} className="self-start flex items-center bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1.2}}
          >
            <p className='text-black px-3'>Start now</p>
            <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
          </motion.button>
        </div>
        
        <motion.div className='flex flex-col px-4 py-1 border-l-2 border-white/40'
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1.4}}
        >
          <p className='text-3xl'>★ ★ ★ ★ ★</p>
          <p className="text-white">15+ Positive Client Reviews</p>
        </motion.div>
      </div>

      <div className="bg-white py-20 px-4 md:px-12 lg:px-20 flex flex-col gap-16" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black">
            From secure data solutions to modern web platforms, we build innovative digital products{" "}
            <span className="text-gray-500">
              and services that empower businesses and individuals to grow in the digital era.
            </span>
          </h2>
          <img src={hero2} alt="Coach" className="rounded-xl shadow-lg w-full max-w-md"/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={1} duration={2} />}+</h3>
            <p className="text-gray-600 mt-2">Years of Innovation</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={15} duration={2.5} />}+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={15} duration={3} />}+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={4000} duration={3.5} separator="," />}+</h3>
            <p className="text-gray-600 mt-2">Hours of Development</p>
          </div>
        </div>
      </div>

      <About/>
      <Reviews />
      <Products />
      <FAQ />
      <Advertisement />
      <Footer />
    </>
  )
}

export default Hero