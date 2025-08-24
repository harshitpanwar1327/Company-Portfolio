import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-12 px-20 gap-12 flex justify-around border-t-1">
      <div>
        <h2 className="flex items-center gap-2 text-white font-semibold text-lg mb-4"><CodeIcon/>CodeWeave</h2>
        <p className="mb-4 max-w-xs text-gray-400">
          Improve your performance with personalized training plans
          guided by an experienced coach committed to your success.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div className='flex flex-col gap-4'>
          <h3 className="text-white font-semibold">Sections</h3>
          <NavLink to={'/hero'} className='text-gray-400 hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4'>About</NavLink>
          <NavLink to={'/hero'} className='text-gray-400 hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-7'>Coaching</NavLink>
          <NavLink to={'/hero'} className='text-gray-400 hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-10'>Reviews</NavLink>
          <NavLink to={'/contact'} className='text-gray-400 hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-13'>Contact</NavLink>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className="text-white font-semibold">Socials</h3>
          <NavLink to={'/hero'} className='text-gray-400 hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4'>Twitter</NavLink>
          <NavLink to={'/hero'} className='text-gray-400 hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8'>Instagram</NavLink>
          <NavLink to={'/hero'} className='text-gray-400 hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-1/2'>Linkdin</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer