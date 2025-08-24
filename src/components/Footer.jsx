import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-12 px-20 gap-12 flex justify-around">
      <div>
        <h2 className="flex items-center gap-2 text-white font-semibold text-lg mb-4"><CodeIcon/>CodeWeave</h2>
        <p className="mb-4 max-w-xs">
          Improve your triathlon performance with personalized training plans
          guided by an experienced coach committed to your success.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div className='flex flex-col gap-4'>
          <h3 className="text-white font-semibold">Sections</h3>
          <NavLink to={'/hero'} className='hover:text-white'>About</NavLink>
          <NavLink to={'/hero'} className='hover:text-white'>Coaching</NavLink>
          <NavLink to={'/hero'} className='hover:text-white'>Reviews</NavLink>
          <NavLink to={'/contact'} className='hover:text-white'>Contact</NavLink>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className="text-white font-semibold">Socials</h3>
          <NavLink to={'/hero'} className='hover:text-white'>Twitter</NavLink>
          <NavLink to={'/hero'} className='hover:text-white'>Instagram</NavLink>
          <NavLink to={'/hero'} className='hover:text-white'>Linkdin</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer