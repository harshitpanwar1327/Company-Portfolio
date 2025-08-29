import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import { Element } from 'react-scroll'

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //text
  const text1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.25], ["0%", "-50%"]);

  const text2Opacity = useTransform(scrollYProgress, [0.33, 0.55, 0.66], [0, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.33, 0.55], ["50%", "0%"]);

  const text3Opacity = useTransform(scrollYProgress, [0.66, 0.9, 1], [0, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.66, 0.9], ["50%", "0%"]);

  //image
  const img1Opacity = useTransform(scrollYProgress, [0, 0.33, 0.4], [1, 1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.33, 0.55, 0.66], [0, 1, 0]);
  const img3Opacity = useTransform(scrollYProgress, [0.66, 0.9, 1], [0, 1, 1]);

  return (
    <Element name="about" ref={ref} className="bg-black min-h-[300vh]">

      {/* Desktop */}
      <section className="sticky top-0 h-screen hidden md:flex flex-row items-center px-6">
        
        {/* Text */}
        <div className="flex-1 relative h-[300px] overflow-hidden ">
          <motion.h2
            style={{ opacity: text1Opacity, y: text1Y }}
            className="text-3xl font-semibold mb-6 absolute max-w-lg ml-25"
          >
            I started my triathlon journey struggling with balance and technique.{" "}
            <span className="text-gray-400">Now, I guide others to achieve their full potential.</span>
          </motion.h2>

          <motion.h2
            style={{ opacity: text2Opacity, y: text2Y }}
            className="text-3xl font-semibold mb-6 absolute max-w-lg ml-25"
          >
            My coaching blends physical training and mental strategies,{" "}
            <span className="text-gray-400">helping athletes build strength and confidence to overcome their limits.</span>
          </motion.h2>

          <motion.h2
            style={{ opacity: text3Opacity, y: text3Y }}
            className="text-3xl font-semibold absolute max-w-lg ml-25"
          >
            Together, we’ll break barriers and unlock your potential,{" "}
            <span className="text-gray-400">turning every milestone into a victory through personalized coaching.</span>
          </motion.h2>
        </div>

        {/* Images */}
        <div className="flex-1 flex items-center justify-center relative">
          <motion.img
            src={about1}
            style={{ opacity: img1Opacity }}
            className="rounded-2xl shadow-lg absolute w-[400px]"
          />
          <motion.img
            src={about2}
            style={{ opacity: img2Opacity }}
            className="rounded-2xl shadow-lg absolute w-[400px]"
          />
          <motion.img
            src={about3}
            style={{ opacity: img3Opacity }}
            className="rounded-2xl shadow-lg absolute w-[400px]"
          />
        </div>
      </section>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-12 px-6 py-12">
        <div className="flex flex-col items-center">
          <img src={about1} className="rounded-2xl shadow-lg w-full max-w-md" />
          <p className="text-xl font-bold mt-4 text-center">
            I started my triathlon journey struggling with balance and technique.{" "}
            <span className="text-gray-600">Now, I guide others to achieve their full potential.</span>.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={about2} className="rounded-2xl shadow-lg w-full max-w-md" />
          <p className="text-xl font-bold mt-4 text-center">
            My coaching blends physical training and mental strategies,{" "}
            <span className="text-gray-300">helping athletes build strength and confidence to overcome their limits.</span>.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={about3} className="rounded-2xl shadow-lg w-full max-w-md" />
          <p className="text-xl font-bold mt-4 text-center">
            Together, we’ll break barriers and unlock your potential,{" "}
            <span className="text-gray-300">turning every milestone into a victory through personalized coaching.</span>.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
