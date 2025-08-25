import React from 'react'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'

const Advertisement = () => {
  return (
    <div className="h-[90vh] md:h-[50vh] lg:h-[90vh] bg-[url(/src/assets/q.jpg)] bg-cover bg-center flex flex-col items-center justify-center gap-8 text-center p-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">Ready to Achieve Your Goals?</h2>
        <p className="md:text-xl">I’ll help you reach new heights and stay ahead of the competition.</p>
        <NavLink to={'/contact'}>
          <button className="self-start flex items-center bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group">
            <p className='text-black px-5'>Let's talk</p>
            <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
          </button>
        </NavLink>
    </div>
  )
}

export default Advertisement