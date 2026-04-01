import { Element } from 'react-scroll'
import { ProjectsData } from '../utils/ProjectsData'
import { motion as Motion } from 'framer-motion'
import { ArrowRight } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { scroller } from "react-scroll"
import { IosShareRounded } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Products = () => {
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
  };

  return (
    <Element name="products" className='flex flex-col items-center gap-8 md:gap-16 py-16 md:py-24 px-4 bg-gray-50'>
      <h2 className='text-black text-5xl font-semibold'>Our Products</h2>

      <div className='w-full lg:w-3/4 flex flex-col gap-10'>
        {ProjectsData.map((project, index) => {
          return (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col lg:flex-row items-center gap-10"
              style={{ zIndex: index }}
            >
              {project.images && project.images.length > 0 && (
                <div className="w-full lg:w-2/5">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    loop
                    className="rounded-xl overflow-hidden"
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`project-${i}`}
                          className="w-full object-cover rounded-xl"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              <div className='text-black flex flex-col gap-8'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-10'>
                  <h3 className='text-3xl font-semibold'>{project.title}</h3>
                  {project.link &&
                    <a href={project.link} target='_blank' className='text-blue-500'>Visit official website <IosShareRounded sx={{fontSize: '18px'}}/></a>
                  }
                </div>
                <p>{project.description}</p>
                <Motion.button
                  onClick={() => handleScroll("/contact", "contact")}
                  className="self-start flex items-center bg-[#f0f0f0] p-1 rounded-full font-semibold hover:bg-gray-200 group border border-[#cdcdcd]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
                >
                  <p className='text-black px-3'>Get in touch</p>
                  <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out' />
                </Motion.button>
              </div>
            </Motion.div>
          );
        })}
      </div>
    </Element>
  );
};

export default Products;