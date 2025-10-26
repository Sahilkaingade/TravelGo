import React from 'react';
import Planebg from '/Travel-Planner/client/src/assets/hero-shapr-1-2.png';
import Bag from '/Travel-Planner/client/src/assets/hero-1.png';


export default function Content() {
  return (
    <>
      <div className='absolute bg-[#f3e9dc]/80 backdrop-blur-md p-8 rounded-3xl shadow-lg top-24 h-[85vh] w-[62%]'>
      <img src={Planebg} alt="plane" className='absolute'/>
      <h1 className="text-3xl font-bold text-[#F7921E] mt-24">Explore Worlds</h1>
      <p className="mt-4 text-7xl font-bold text-left text-gray-900">Exploring Beautiful <br />Destinations</p>
      <p className="mt-4 text-xl text-gray-700">Planning your next adventure with us with the valuable discounts and be the one to explore the world!</p>
      <img src={Bag} alt="bag" className='absolute left-4 w-40 bottom-0.5' />
      <button className='mt-4 bg-[#F7921E] text-white py-2 px-4 rounded-full absolute ml-36'>Get Started</button>
    </div>
    </>
  )
}