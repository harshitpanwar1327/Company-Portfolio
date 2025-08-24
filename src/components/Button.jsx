import React from 'react'
import { ArrowRight } from "lucide-react"

const Button = ({heading}) => {
  return (
    <div>
      <button className="flex items-center bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group">
        <p className='text-black px-3'>{heading}</p>
        <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
      </button>
    </div>
  )
}

export default Button