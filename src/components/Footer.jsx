import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black p-16 gap-12 flex flex-col md:flex-row justify-between">
      <div className='flex flex-col gap-6'>
        <h2 className="flex items-center gap-2 text-white font-semibold text-lg"><CodeIcon/> CodeWeave</h2>
        <p className="max-w-xs opacity-60 text-sm">Improve your performance with personalized training plans guided by an experienced coach committed to your success.
        </p>
      </div>

      <div className='grid grid-cols-2 gap-20 text-white/60'>
        <div className='flex flex-col gap-2'>
          <h3 className="text-white font-semibold">Sections</h3>
          <NavLink to={'/hero'} className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4'>About</NavLink>
          <NavLink to={'/hero'} className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-7'>Coaching</NavLink>
          <NavLink to={'/hero'} className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-10'>Reviews</NavLink>
          <NavLink to={'/contact'} className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-13'>Contact</NavLink>
        </div>

        <div className='flex flex-col gap-2 text-white/60'>
          <h3 className="text-white font-semibold">Socials</h3>
          <NavLink to={'/hero'} className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4'>Twitter</NavLink>
          <NavLink to={'/hero'} className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-7'>Instagram</NavLink>
          <NavLink to={'/hero'} className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-10'>Linkdin</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer