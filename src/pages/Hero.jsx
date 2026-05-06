import { lazy } from 'react'
import { ArrowRight } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { scroller, Element } from "react-scroll"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import hero2 from "../assets/hero2.webp"
import { Helmet } from 'react-helmet-async'
import { motion as Motion } from 'framer-motion'

const Navigation = lazy(() => import('../components/Navigation.jsx'))
const Products = lazy(() => import('../section/Products'))
const Reviews = lazy(() => import('../section/Reviews'))
const About = lazy(() => import('../section/About'))
const FAQ = lazy(() => import('../section/FAQ'))
const Advertisement = lazy(() => import('../section/Advertisement'))
const Footer = lazy(() => import('../components/Footer.jsx'))

const Hero = () => {
  const text = "We Build Scalable SaaS \nProducts & Modern \nWeb Applications";
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
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <>
      <Helmet>
        <title>SaaS Development Company in India | CodeWeave</title>
        <meta name="description" content="CodeWeave is a SaaS development company building scalable web applications, ERP systems, and custom software for startups and businesses." />
        <link rel="canonical" href="https://codeweave.in/" />
        <meta property="og:title" content="CodeWeave | SaaS Development Company" />
        <meta property="og:description" content="We build SaaS platforms, ERP systems, and scalable web applications for startups and businesses." />
        <meta property="og:url" content="https://codeweave.in/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CodeWeave",
            "url": "https://codeweave.in",
            "logo": "https://codeweave.in/favicon.png",
            "sameAs": [],
            "areaServed": "IN",
            "description": "SaaS development company in India building scalable web applications and ERP systems."
          }`}
        </script>
      </Helmet>
    
      <Element name='hero' className="w-screen min-h-[100vh] lg:min-h-[120vh] px-4 md:px-12 lg:px-20 pb-8 bg-[url(/src/assets/hero.webp)] bg-cover bg-center flex flex-col justify-between gap-16">
        <Navigation />

        <div className="flex flex-col gap-3 text-white">
          <Motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-semibold"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <Motion.span key={index} variants={child}>
                {letter === " " ? "\u00A0" : letter === "\n" ? <br /> : letter}
              </Motion.span>
            ))}
          </Motion.h1>
          <Motion.p className="text-lg my-6 md:w-2/3 lg:w-1/2"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1}}
          >We help startups and businesses turn ideas into powerful digital products — from SaaS platforms and ERP systems to high-performance websites. Creators of ClassEzo, Daily Spend, and QweRty.</Motion.p>

          <Motion.button onClick={() => handleScroll("/contact", "contact")} className="self-start flex items-center bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1.2}}
          >
            <p className='text-black px-3'>Start now</p>
            <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
          </Motion.button>
        </div>
        
        <Motion.div className='flex flex-col px-4 py-1 border-l-2 border-white/40'
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 15, delay: 1.4}}
        >
          <p className='text-3xl'>★ ★ ★ ★ ★</p>
          <p className="text-white">10+ Positive Client Reviews</p>
        </Motion.div>
      </Element>

      <div className="flex flex-col justify-center items-center gap-16 py-16 md:py-24 px-4 max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black">
            From secure data solutions to modern web platforms, we build innovative digital products{" "}
            <span className="text-gray-500">
              and services that empower businesses and individuals to grow in the digital era.
            </span>
          </h2>
          <img src={hero2} alt="SaaS development company building web applications" className="rounded-xl shadow-lg w-full max-w-md"/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={1.5} duration={2} />}</h3>
            <p className="text-gray-600 mt-2">Years of Innovation</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={10} duration={2.5} />}+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={10} duration={3} />}+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={5000} duration={3.5} separator="," />}+</h3>
            <p className="text-gray-600 mt-2">Hours of Development</p>
          </div>
        </div>
      </div>

      <Products />
      <Reviews />
      <About/>
      <FAQ />
      <Advertisement />
      <Footer />
    </>
  )
}

export default Hero