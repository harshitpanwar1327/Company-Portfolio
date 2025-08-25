import React from 'react'
import { ArrowRight } from "lucide-react"

const Advertisement = () => {
  return (
    <div className="h-[70vh] w-full bg-[url(/src/assets/q.jpg)] bg-cover bg-center flex items-center justify-center text-center">   

      <div className="max-w-3xl">
        <h1 className="md:text-7xl text-white">Ready to Achieve Your Goals?</h1>
        <p className="mt-4 text-md md:text-l text-gray-100">I’ll help you reach new heights and stay ahead of the competition.</p>

        <div className='mt-8 inline-flex items-center'>
          <button className="flex items-center bg-white p-1 rounded-full font-normal hover:bg-gray-200 group">
          <p className='text-black px-5'>Let's Talk</p>
          <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
        </button>
        </div>
      </div>

    </div>
  )
}

export default Advertisement