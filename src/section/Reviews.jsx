import w from '../assets/w.jpg'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import { useState, useEffect } from "react";

const reviewsData = [
  {
    text: "With the right coaching, I was able to push past my limits. I couldn't have reached my goals without the guidance and support of an experienced coach.",
    name: "Aliyandro Navaro",
    role: "Cartel leader",
    img: p1,
  },
  {
    text: "I’ve learned more in the past few months with my coach than I did in years on my own. Their personalized approach made all the difference.",
    name: "Michael Smith",
    role: "Fitness Trainer",
    img: p2,
  },
  {
    text: "The difference between training on your own and with an expert coach is huge. I’ve never felt more confident and prepared for my races.",
    name: "Sophia Lee",
    role: "Nutritionist",
    img: p3,
  },
  {
    text: "Training with a coach who really knows the sport has been a game-changer. I’ve shaved minutes off my time and am in the best shape of my life.",
    name: "Alexandra Dadario",
    role: "Life Coach",
    img: p4,
  },
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
    <div className="flex flex-col h-[80vh] items-center justify-center py-30 px-6 bg-white text-center">
      <p className="text-3xl text-yellow-500 mb-2">★★★★★</p>

      <p className="max-w-2xl text-2xl md:text-3xl font-medium text-black mb-10 transition-all duration-500">{text}</p>

      <p className="text-gray-800 mb-6">{name}, <span>{role}</span></p>

      <div className="flex space-x-4">
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