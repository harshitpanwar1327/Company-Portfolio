import React from 'react'
import { Phone, Mail } from "lucide-react";
import Navigation from '../components/Navigation'
import { ArrowRight } from "lucide-react"

const Contact = () => {
  return (
    <div className='px-16 bg-black'>
      <Navigation />
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-black text-white py-20 px-15">
        
        <div>
          <h2 className='text-7xl font-semibold mb-6'>Let's get <br />in touch</h2>
          <p className='text-gray-300 mb-10 max-w-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta quos quae nihil vel temporibus similique ea deleniti natus saepe, nemo.
          </p>

          <div className='space-y-4'>
            <p className='flex items-center gap-3'>
              <Phone className='w-5 h-5'/> +91 8595994381, +91 9311201990
            </p>
            <p className='flex items-center gap-3'>
              <Mail className='w-5 h-5'/> codeweave.site@gmail.com
            </p>
          </div>
        </div>

        <form className='bg-neutral-900 p-8 rounded-2xl shadow-lg space-y-6'>
          <div>
            <label className='block mb-2'>Name</label>
            <input type="text" placeholder='Jane Smith' className='w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'/>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block mb-2'>Email</label>
              <input type="email" placeholder='example@example.com' className='w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'/>
            </div>
            <div>
              <label className='block mb-2'>Phone (optional)</label>
              <input type="tel" placeholder='+123456789' className='w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'/>
            </div>
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              placeholder="I need..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button className="flex items-center justify-between bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group w-full">
            <p className='text-black px-3 mx-auto'>Submit</p>
            <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact