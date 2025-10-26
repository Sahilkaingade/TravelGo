import React, { useEffect, useState } from 'react';
import slide1 from '/Travel-Planner/client/src/assets/bg2.png';
import slide2 from '/Travel-Planner/client/src/assets/bg3.png';
import slide3 from '/Travel-Planner/client/src/assets/bg4.png';
import Content from '../Content/content';

// ✅ Move images outside the component
const images = [slide1, slide2, slide3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // ✅ no warning now

  return (
    <div className='mt-24 ml-10 mr-10 rounded-3xl'
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        height: '85vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out'
      }}
    >      
      <Content className="absolute inset-0 flex items-center justify-center text-white" />
    </div>
  );
}
