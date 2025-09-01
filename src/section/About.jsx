import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Element } from 'react-scroll'
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //text
  const text1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.45], [0, -60]);

  const text2Opacity = useTransform(scrollYProgress, [0.55, 0.8, 1], [0, 1, 1]);
  const text2Y = useTransform(scrollYProgress, [0.55, 0.8], [60, 0]);

  //image
  const img1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.55, 0.8, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="bg-black text-white min-h-[110vh] relative flex flex-col p-2">

      <section className="sticky top-0 h-screen hidden md:flex flex-row items-center px-6">
        
        <div className="flex-1 relative h-[200px] overflow-hidden">
          <motion.h2
            style={{ opacity: text1Opacity, y: text1Y }}
            className="text-3xl font-semibold mb-6 absolute max-w-lg"
          >
            Every breakthrough starts with a vision. When passion meets persistence, {" "}
            <span className="text-gray-400">
              even the boldest ideas become reality.
            </span>
          </motion.h2>

          <motion.h2
            style={{ opacity: text2Opacity, y: text2Y }}
            className="text-3xl font-semibold mb-6 absolute max-w-lg"
          >
            Innovation isn’t about following trends — it’s about creating change {" "}
            <span className="text-gray-400">
              that inspires people and shapes tomorrow.
            </span>
          </motion.h2>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <motion.img
            src={about1}
            style={{ opacity: img1Opacity }}
            className="rounded-2xl shadow-lg absolute w-[26rem]"
            alt="about1"
          />
          <motion.img
            src={about2}
            style={{ opacity: img2Opacity }}
            className="rounded-2xl shadow-lg absolute w-[25rem]"
            alt="about2"
          />
        </div>
      </section>

      {/* Small Screen */}
      <div className="md:hidden flex flex-col gap-12 px-6 py-12">
        <div className="flex flex-col items-center">
          <img src={about1} className="rounded-2xl shadow-lg w-full max-w-md" alt="about1" />
          <p className="text-xl font-bold mt-4 text-center">
            I started my triathlon journey struggling with balance and technique.{" "}
            <span className="text-gray-600">
              Now, I guide others to achieve their full potential.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={about2} className="rounded-2xl shadow-lg w-full max-w-md" alt="about2" />
          <p className="text-xl font-bold mt-4 text-center">
            My coaching blends physical training and mental strategies,{" "}
            <span className="text-gray-300">
              helping athletes build strength and confidence to overcome their limits.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
