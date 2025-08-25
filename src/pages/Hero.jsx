import React from 'react'
import Navigation from '../components/Navigation'
import Advertisement from '../section/Advertisement'
import FAQ from '../section/FAQ'
import Reviews from '../section/Reviews'
import Products from '../section/Products'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'

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

      <Reviews />
      <Products />
      <FAQ />
      <Advertisement />
    </>
  )
}

export default Hero