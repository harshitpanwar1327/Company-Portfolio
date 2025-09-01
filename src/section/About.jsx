import React from 'react'
import { Element } from 'react-scroll'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'

const About = () => {
  return (
    <Element name='about' className='bg-black flex flex-col justify-center items-center gap-24 py-24 px-8 md:px-16 lg:px-24'>
      <div className='flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-24'>
        <h3 className='text-xl md:text-2xl text-center lg:text-justify'>Every breakthrough starts with a vision. When passion meets persistence, <span className='opacity-60'>even the boldest ideas become reality.</span></h3>
        <img src={about1} alt="img" className='w-full lg:w-[40%] rounded-lg'/>
      </div>
      <div className='flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-24'>
        <h3 className='text-xl md:text-2xl text-center lg:text-justify'>Innovation isn’t about following trends — it’s about creating change <span className='opacity-60'>that inspires people and shapes tomorrow.</span></h3>
        <img src={about2} alt="img" className='w-full lg:w-[40%] rounded-lg'/>
      </div>
      <div className='flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-24'>
        <h3 className='text-xl md:text-2xl text-center lg:text-justify'>The future belongs to those who build with purpose. Secure, smart, and <span className='opacity-60'>impactful solutions start with a single step forward.</span></h3>
        <img src={about3} alt="img" className='w-full lg:w-[40%] rounded-lg'/>
      </div>
    </Element>
  )
}

export default About