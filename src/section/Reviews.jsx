import { useState, useEffect } from "react"
import * as Icons from '../assets/reviews'
import { Element } from 'react-scroll'

const reviewsData = [
  {
    text: "Working with CodeWeave on DailySpend has been a great experience. Their approach to development is very structured, and they focus a lot on user experience and performance. The team was proactive, communicated clearly, and ensured every feature was built with precision. Overall, the collaboration was smooth and professional.",
    name: "Kirti Ahlawat",
    role: "CEO & Founder, DailySpend",
    img: Icons.Review1,
  },
  {
    text: "We are extremely satisfied with the services provided by Codeweave Company. They designed a professional, modern, and user-friendly website for Omega Tutorials exactly according to our requirements. Their team was cooperative, creative, and always ready to make changes whenever needed. The website perfectly represents our institute and has helped improve our online presence. We truly appreciate their dedication, timely support, and quality work. Highly recommended for anyone looking for reliable web development services!",
    name: "Yogesh Kumar",
    role: "Director, Omega Tutorials",
    img: Icons.Review2,
  },
  {
    text: "We partnered with CodeWeave for the development of the Outect website, and the experience was excellent from start to finish. Their team understood our vision quickly and transformed it into a modern, responsive, and professionally designed website that perfectly represents our brand. The attention to detail, smooth communication, and fast delivery really stood out. I’d highly recommend CodeWeave to any startup or business looking for high-quality web development services.",
    name: "Shashank Panwar",
    role: "Founder & CTO, Outect",
    img: Icons.Review3,
  },
  {
    text: "CodeWeave developed a comprehensive Hospitality Management System for our organization that has significantly streamlined our daily operations. From reservations and guest management to billing and reporting, every module was thoughtfully designed and easy to use. Their team demonstrated strong technical expertise, delivered the project on time, and provided excellent support throughout the development process. We highly recommend CodeWeave for custom software development.",
    name: "Rishabh Chaudhary",
    role: "Director, RC Groups",
    img: Icons.Review4,
  },
  {
    text: "CodeWeave created a modern, responsive, and SEO-friendly website for The Learning Edges Academy that truly reflects our vision and values. Their team understood our requirements perfectly and delivered a clean, fast, and professional website that has improved our online presence and made it easier for students and parents to connect with us. Their communication, creativity, and commitment to quality made the entire experience outstanding.",
    name: "Ashish Shah",
    role: "Director, The Learning Edges Academy",
    img: Icons.Review5,
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const { text, name, role} = reviewsData[currentIndex];

  return (
    <Element name="reviews" className="flex flex-col items-center justify-center gap-8 md:gap-16 py-16 md:py-24 px-4 md:px-12 lg:px-20 bg-white">
      <h2 className='text-black text-5xl font-semibold text-center'>What Our Clients Say</h2>

      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl text-yellow-500">★★★★★</p>
        <p className="max-w-6xl text-xl md:text-2xl text-center text-black transition-all duration-500">{text}</p>
        <p className="text-gray-800 my-2">{name}, {role}</p>

        <div className="flex gap-4">
          {reviewsData.map((review, index) => (
            <img
              key={index}
              src={review.img}
              alt={review.name}
              onClick={() => handleClick(index)}
              className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "scale-110" : "opacity-60 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Reviews