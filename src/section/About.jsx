import React from 'react'
import { Element } from 'react-scroll'
import founderImg from '../assets/about1.webp'
import cofounderImg from '../assets/about2.webp'
import productEngineerImg from '../assets/about3.webp'

const About = () => {
  return (
    <Element name='about' className='bg-black text-white flex flex-col justify-center items-center gap-8 md:gap-16 py-16 md:py-24 px-4 md:px-12 lg:px-20'>
      <div className='max-w-4xl text-center space-y-6'>
        <h2 className='text-4xl md:text-5xl font-bold'>About Code Weave</h2>
        <p className='text-lg text-white/80 leading-relaxed'>
          Founded in 2024, <span className='font-semibold text-white'>Code Weave</span> was born with a single vision — to empower businesses and individuals through innovative technology solutions. Our motivation stems from a belief that great ideas deserve more than just execution; they deserve passion, precision, and persistence. Over the years, we’ve built a culture where creativity meets functionality, enabling us to deliver impactful solutions that shape the digital future.
        </p>
      </div>

      <div className='w-full flex flex-col gap-16'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>From Our Team</h2>

        <div className='flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-12'>
          <div className='md:w-[45%] lg:w-[30%] flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'>
            <img src={founderImg} alt="Founder" loading='lazy' className='w-32 h-32 object-cover rounded-full border-4 border-white/20' />
            <h3 className='text-xl font-bold'>Harshit Panwar (CEO)</h3>
            <p className='text-white/70 italic'>“At CodeWeave, our mission is to bridge the gap between ideas and execution. We believe technology should empower, inspire, and make life simpler.”</p>
          </div>

          <div className='md:w-[45%] lg:w-[30%] flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'>
            <img src={cofounderImg} alt="Co-Founder" loading='lazy' className='w-32 h-32 object-cover rounded-full border-4 border-white/20' />
            <h3 className='text-xl font-bold'>Ayush Choudhary (CTO)</h3>
            <p className='text-white/70 italic'>“We started CodeWeave with the vision of creating a collaborative platform where innovation thrives, and every project carries a meaningful impact.”</p>
          </div>

          <div className='md:w-[45%] lg:w-[30%] flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'>
            <img src={productEngineerImg} alt="Founder" loading='lazy' className='w-32 h-32 object-cover rounded-full border-4 border-white/20' />
            <h3 className='text-xl font-bold'>Shashank Panwar (Product Engineer)</h3>
            <p className='text-white/70 italic'>“Being part of CodeWeave means building solutions with purpose. I focus on crafting reliable, scalable systems that not only meet today’s needs but are ready for tomorrow’s challenges.”</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About