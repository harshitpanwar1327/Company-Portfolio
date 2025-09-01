import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import { Link } from 'react-scroll'
import { useNavigate, useLocation } from "react-router-dom"
import { scroller } from "react-scroll"

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (route, section) => {
    if (location.pathname !== route) {
      navigate(route);

      setTimeout(() => {
        if (section) {
          scroller.scrollTo(section, {
            smooth: true,
            duration: 600,
            offset: -80,
          });
        }
      }, 200);
    } else {
      if (section) {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -80,
        });
      }
    }
  };

  return (
    <div className="bg-black p-8 md:p-16 gap-12 flex flex-col md:flex-row justify-between">
      <div className='flex flex-col gap-6'>
        <h2 className="flex items-center gap-2 text-white font-semibold text-lg"><CodeIcon/> CodeWeave</h2>
        <p className="max-w-xs opacity-60 text-sm">We’re on a mission to build secure, smart, and future-ready digital solutions that empower businesses, families, and communities to thrive in a connected world.</p>
      </div>

      <div className='grid grid-cols-2 gap-20 text-white/60'>
        <div className='flex flex-col gap-2'>
          <h3 className="text-white font-semibold">Sections</h3>
          <p onClick={() => handleScroll("/hero", "about")} className='cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4'>About</p>
          <p onClick={() => handleScroll("/hero", "products")} className='cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-7'>Products</p>
          <Link to='reviews' className='cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-10'>Reviews</Link>
          <p onClick={() => handleScroll("/contact", "contact")} className='cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-13'>Contact</p>
        </div>

        <div className='flex flex-col gap-2 text-white/60'>
          <h3 className="text-white font-semibold">Socials</h3>
          <a href="https://github.com/harshitpanwar1327/" target='_blank' className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4'>Github</a>
          <a href="https://www.linkedin.com/in/harshit-panwar-98335a264/" target='_blank' className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-7'>Linkdin</a>
          <a href="mailto:codeweave.site@gmail.com" target='_blank' rel="noopener noreferrer" className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-10'>Gmail</a>
          <a href="https://wa.me/918595994381" target='_blank' rel="noopener noreferrer" className='hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-13'>Whatsapp</a>
        </div>
      </div>
    </div>
  )
}

export default Footer