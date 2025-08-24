import React from 'react'
import { ArrowRight } from "lucide-react"
import a from '../assets/a.jpg'
import b from '../assets/b.jpg'
import c from '../assets/c.jpg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute">
        <img src={a} alt="laptop" className="w-full h-full object-cover"/>
      </div>

      <nav className="absolute top-0 w-full flex items-center justify-between px-10 py-6 text-white z-20">
        <div className="flex space-x-8 font-medium">
          <span className="text-lg ">CodeWeave</span>
          <span className='flex flex-col h-[2rem] w-[2px] bg-white'></span>
          <NavLink to={'/hero'}><h2 className="cursor-pointer">Hero</h2></NavLink>
          <NavLink to={'/contact'}><h2 className="cursor-pointer">Contact</h2></NavLink>
        </div>
        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm">Get template</button>
      </nav>


      <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white max-w-3xl">
        <p className="tracking-wide mb-2">
          -- EXPERIENCED COACH
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Level Up Your <br /> Performance
        </h1>
        <p className="text-lg mb-6">
          Improve your performance with personalized training plans
          guided by an experienced coach committed to your success.
        </p>

        <div className="flex items-center space-x-6">
          <button className="flex items-center gap-2 bg-white text-black pl-5 pr-1 py-1 rounded-full font-semibold hover:bg-gray-200">
            Start now <ArrowRight size={45} className='bg-black text-white rounded-full p-3 ml-2'/>
          </button>
        </div>
        <div className='flex flex-col h-[4rem] w-[1.5px] bg-white mt-6'>
          <div className="flex text-white-400 ml-4 text-3xl space-x-2">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p className="text-white text-sm ml-4 w-[15rem]">15+ Positive Client Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Hero