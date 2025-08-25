import React from 'react'
import { NavLink } from 'react-router-dom'
import CodeIcon from '@mui/icons-material/Code'

const Navigation = () => {
  return (
    <div className='flex items-center gap-4 md:gap-8 py-6 text-white text-lg'>
      <p className="font-semibold flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out"><CodeIcon/> CodeWeave</p>
      <span className='text-2xl opacity-40'>|</span>
      <NavLink to="/hero">
        <h2 className="relative py-2 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Hero</h2>
      </NavLink>
      <NavLink to={'/contact'}>
        <h2 className="relative py-2 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</h2>
      </NavLink>
    </div>
  )
}

export default Navigation