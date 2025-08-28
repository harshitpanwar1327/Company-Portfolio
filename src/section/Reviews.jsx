import { useState, useEffect } from "react"
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'

const reviewsData = [
  {
    text: "The Data Block Solution completely transformed the way we manage security. It gave us full control over data transfers and helped us prevent risks we didn’t even know existed.",
    name: "Rajesh Kumar",
    role: "IT Manager",
    img: profile1,
  },
  {
    text: "We hired the team for web development, and the results exceeded expectations. Our new platform is modern, responsive, and perfectly aligned with our brand.",
    name: "Daniel Wong",
    role: "Startup Founder",
    img: profile2,
  },
  {
    text: "The Real Estate Website is sleek, fast, and easy to use. It has made listing and managing properties seamless for both agents and buyers.",
    name: "Priya Mehta",
    role: "Real Estate Consultant",
    img: profile3,
  },
  {
    text: "Their expertise in Windows application development and Figma design helped us launch a product that was both powerful and user-friendly. Couldn’t have asked for better support!",
    name: "Emily Carter",
    role: "Product Manager",
    img: profile4,
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
    <div className="flex flex-col items-center justify-center h-[90vh] md:h-[50vh] lg:h-[90vh] p-4 bg-white gap-2">
      <p className="text-3xl text-yellow-500">★★★★★</p>
      <p className="max-w-2xl text-2xl md:text-3xl text-center text-black transition-all duration-500">{text}</p>
      <p className="text-gray-800 my-8">{name}, {role}</p>

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
  )
}

export default Reviews