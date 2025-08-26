import React from 'react'
import Navigation from '../components/Navigation'
import Advertisement from '../section/Advertisement'
import FAQ from '../section/FAQ'
import Reviews from '../section/Reviews'
import Products from '../section/Products'
import About from '../section/About'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'
import CountUp from "react-countup";
import a from "../assets/c.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative w-screen px-8 md:px-16 pb-8 bg-[url(/src/assets/e.jpg)] bg-cover bg-center overflow-hidden flex flex-col justify-between gap-16">
        <Navigation />

        <div className="flex flex-col gap-3 text-white">
          <p className="text-lg">- Experienced Developer</p>
          <h2 className='text-5xl md:text-7xl'>Level Up Your</h2>
          <h2 className='text-5xl md:text-7xl'>Performance</h2>
          <p className="text-lg mb-6 md:w-1/2">Improve your performance with personalized training plans guided by an experienced coach committed to your success.</p>

          <NavLink to={'/contact'}>
            <button className="self-start flex items-center bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group">
              <p className='text-black px-3'>Start now</p>
              <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
            </button>
          </NavLink>
        </div>
        
        <div className='flex flex-col px-4 py-1 border-l-2 border-white/40'>
          <p className='text-3xl'>★ ★ ★ ★ ★</p>
          <p className="text-white">15+ Positive Client Reviews</p>
        </div>
      </div>


      {/* Counter section */}
      <div className="my-20 py-20 bg-white container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              From beginners to seasoned pros, I create custom plans{" "}
              <span className="text-gray-500">
                tailored to help you unlock your full potential and succeed in
                races.
              </span>
            </h2>
          </div>

          <div className="flex justify-center">
            <img
              src={a}
              alt="Coach"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-4xl font-bold text-black">
              <CountUp end={15} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2">Years of experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">
              <CountUp end={200} duration={2.5} />+
            </h3>
            <p className="text-gray-600 mt-2">Athletes coached</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">
              <CountUp end={500} duration={3} />+
            </h3>
            <p className="text-gray-600 mt-2">Race strategies</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-black">
              <CountUp end={10000} duration={3.5} separator="," />+
            </h3>
            <p className="text-gray-600 mt-2">Training hours</p>
          </div>
          
        </div>
      </div>

      <About/>
      <Reviews />
      <Products />
      <FAQ />
      <Advertisement />
    </>
  )
}

export default Hero