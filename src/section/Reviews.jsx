import { useState, useEffect } from "react"
import omegaProfile from '../assets/reviews/omegaProfile.jpg'
import dailyspendProfile from '../assets/reviews/dailyspendProfile.png'
import outectProfile from '../assets/reviews/outectProfile.png'
import { Element } from 'react-scroll'

const reviewsData = [
  {
    text: "Working with CodeWeave on DailySpend has been a great experience. Their approach to development is very structured, and they focus a lot on user experience and performance. The team was proactive, communicated clearly, and ensured every feature was built with precision. Overall, the collaboration was smooth and professional.",
    name: "Kirti Ahlawat",
    role: "CEO & Founder, DailySpend",
    img: dailyspendProfile,
  },
  {
    text: "We are extremely satisfied with the services provided by Codeweave Company. They designed a professional, modern, and user-friendly website for Omega Tutorials exactly according to our requirements. Their team was cooperative, creative, and always ready to make changes whenever needed. The website perfectly represents our institute and has helped improve our online presence. We truly appreciate their dedication, timely support, and quality work. Highly recommended for anyone looking for reliable web development services!",
    name: "Yogesh Kumar",
    role: "Director, Omega Tutorials",
    img: omegaProfile,
  },
  {
    text: "We partnered with CodeWeave for the development of the Outect website, and the experience was excellent from start to finish. Their team understood our vision quickly and transformed it into a modern, responsive, and professionally designed website that perfectly represents our brand. The attention to detail, smooth communication, and fast delivery really stood out. I’d highly recommend CodeWeave to any startup or business looking for high-quality web development services.",
    name: "Shashank Panwar",
    role: "Founder & CTO, Outect",
    img: outectProfile,
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