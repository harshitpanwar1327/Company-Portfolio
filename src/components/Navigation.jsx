import React, { useState } from "react"
import { useNavigate, useLocation, NavLink } from "react-router-dom"
import { scroller } from "react-scroll"
import CodeIcon from "@mui/icons-material/Code"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-scroll'

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
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
          });
        }
      }, 200);
    } else {
      if (section) {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
        });
      }
    }
    setOpenNav(false);
  };

  return (
    <div className="flex items-center gap-4 md:gap-8 py-6 text-white text-lg">
      <NavLink to="/hero" className="font-semibold flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out"><CodeIcon /> CodeWeave</NavLink>

      <span className="text-2xl opacity-40 hidden md:inline">|</span>

      <h2 onClick={() => handleScroll("/hero", "products")} className="hidden md:block relative py-2 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Products</h2>
      <Link to="reviews" className="hidden md:block relative py-2 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Reviews</Link>
      <h2 onClick={() => handleScroll("/hero", "about")} className="hidden md:block relative py-2 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</h2>
      <h2 onClick={() => handleScroll("/contact", "contact")} className="hidden md:block relative py-2 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</h2>

      <MenuIcon className="absolute right-5 md:!hidden cursor-pointer" onClick={() => setOpenNav(true)}/>

      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-8 p-8 fixed top-0 left-0 text-black bg-white w-full z-50"
          >
            <div className="flex justify-between items-center w-full border-b border-gray-300 pb-4">
              <p className="font-semibold"><CodeIcon /> CodeWeave</p>
              <CloseIcon className="cursor-pointer" onClick={() => setOpenNav(false)}/>
            </div>

            <h2 onClick={() => handleScroll("/hero", "products")}>Products</h2>
            <Link to="reviews">Reviews</Link>
            <h2 onClick={() => handleScroll("/hero", "about")}>About</h2>
            <h2 onClick={() => handleScroll("/contact", "contact")}>Contact</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;