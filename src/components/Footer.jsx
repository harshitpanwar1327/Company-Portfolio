import { Code } from '@mui/icons-material'
import { Link } from 'react-scroll'
import { useNavigate, useLocation, NavLink } from "react-router-dom"
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
    <div className="bg-black p-8 md:px-12 md:py-12 flex flex-col gap-8">
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='flex flex-col gap-6'>
          <h2 onClick={() => handleScroll("/", "hero")} className="font-semibold flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out"><Code /> CodeWeave</h2>
          <p className="max-w-xs opacity-60 text-sm">We’re on a mission to build secure, smart, and future-ready digital solutions that empower businesses, families, and communities to thrive in a connected world.</p>
        </div>

        <div className='grid grid-cols-2 gap-10 text-white/60'>
          <div className='flex flex-col gap-2'>
            <h3 className="text-white font-semibold">Quick Links</h3>
            <p onClick={() => handleScroll("/hero", "about")} className='w-fit cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-4'>About</p>
            <p onClick={() => handleScroll("/hero", "products")} className='w-fit cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-7'>Products</p>
            <p onClick={() => handleScroll("/work", "work")} className='w-fit cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-10'>Work</p>
            <Link to='reviews' className='w-fit cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-13'>Reviews</Link>
            <p onClick={() => handleScroll("/contact", "contact")} className='w-fit cursor-pointer hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-16'>Contact</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className="text-white font-semibold">Socials</h3>
            <a href="mailto:codeweave1327@gmail.com" target='_blank' rel="noopener noreferrer" className='w-fit hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-5'>Gmail</a>
            <a href="https://www.linkedin.com/company/codeweave1327/" target='_blank' rel="noopener noreferrer" className='w-fit hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-8'>LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCdL7XtgIMC64BQ4SpZ8qWDA" target='_blank' rel="noopener noreferrer" className='w-fit hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-11'>YouTube</a>
            <a href="https://www.instagram.com/codeweave1327/" target='_blank' rel="noopener noreferrer" className='w-fit hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-14'>Instagram</a>
            <a href="https://wa.me/918595901990?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target='_blank' rel="noopener noreferrer" className='w-fit hover:text-white relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-17'>Whatsapp</a>
          </div>
        </div>
      </div>

      <hr className="text-gray-700!" />

      <div className='flex flex-col md:flex-row items-center justify-between gap-5 px-5 text-white/80'>
        <p className='text-sm'>&copy; 2026 CodeWeave. All rights reserved.</p>
        <div className='flex items-center gap-4'>
          <NavLink to={'/privacy-policy'} className="hover:text-white transition duration-300">Privacy Policy</NavLink>
          <NavLink to={'/terms-and-conditions'} className="hover:text-white transition duration-300">Terms & Conditions</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer