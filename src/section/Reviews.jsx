import { useState, useEffect } from "react"
// import omegaProfile from '../assets/reviews/omegaProfile.jpg'
import dailyspendProfile from '../assets/reviews/dailyspendProfile.png'
import { Element } from 'react-scroll'

const reviewsData = [
  {
    text: "Working with CodeWeave on DailySpend has been a great experience. Their approach to development is very structured, and they focus a lot on user experience and performance. The team was proactive, communicated clearly, and ensured every feature was built with precision. Overall, the collaboration was smooth and professional.",
    name: "Kirti Ahlawat",
    role: "CEO & Founder, DailySpend",
    img: dailyspendProfile,
  },
  // {
  //   text: "We got our coaching institute website developed by CodeWeave, and the experience was smooth from start to finish. They understood our requirements clearly and delivered a clean, professional website that perfectly represents Omega Tutorials. The team was responsive, made quick changes whenever needed, and delivered on time. Highly recommended for anyone looking for quality website services at a reasonable price.",
  //   name: "Yogesh Kumar",
  //   role: "Director, Omega Tutorials",
  //   img: omegaProfile,
  // }
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