import React from 'react'
import { Element } from 'react-scroll'
import founderImg from '../assets/about1.jpg'
import cofounderImg from '../assets/about2.jpg'

const About = () => {
  return (
    <Element 
      name='about' 
      className='bg-black text-white flex flex-col justify-center items-center gap-24 py-24 px-8 md:px-16 lg:px-24'
    >
      <div className='max-w-4xl text-center space-y-6'>
        <h2 className='text-4xl md:text-5xl font-bold'>About Code Weave</h2>
        <p className='text-lg text-white/80 leading-relaxed'>
          Founded in 2024, <span className='font-semibold text-white'>Code Weave</span> was born with a single vision — to empower businesses and individuals through innovative technology solutions. Our motivation stems from a belief that great ideas deserve more than just execution; they deserve passion, precision, and persistence. Over the years, we’ve built a culture where creativity meets functionality, enabling us to deliver impactful solutions that shape the digital future.
        </p>
      </div>

      <div className='w-full flex flex-col gap-16'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>From Our Founders</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'>
            <img src={founderImg} alt="Founder" className='w-32 h-32 object-cover rounded-full border-4 border-white/20' />
            <h3 className='text-xl font-bold'>Harshit Panwar</h3>
            <p className='text-white/70 italic'>“At Code Weave, our mission is to bridge the gap between ideas and execution. We believe technology should empower, inspire, and make life simpler.”</p>
          </div>

          <div className='flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'>
            <img src={cofounderImg} alt="Co-Founder" className='w-32 h-32 object-cover rounded-full border-4 border-white/20' />
            <h3 className='text-xl font-bold'>Ayush Choudhary</h3>
            <p className='text-white/70 italic'>“We started Code Weave with the vision of creating a collaborative platform where innovation thrives, and every project carries a meaningful impact.”</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About