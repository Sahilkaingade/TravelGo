import React from 'react';
import Discountbg from '/Travel-Planner/client/src/assets/discountbg.jpg';
import ctaman from '/Travel-Planner/client/src/assets/cta-man-1-1.png';
import CountdownTimer from '../CountdownTimer.jsx/countdowntimer';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function Discount() {
  return (
    <div style={{backgroundImage: `url(${Discountbg})`}} className="bg-cover bg-center flex flex-col items-center justify-center text-center h-[90vh] rounded-xl mb-8">
      <div className='flex'>
        <div className='bg-orange-500 w-[500px] h-[70vh] mb-10 rounded-t-full relative top-[94px] -translate-x-40'>
            <img src={ctaman} alt="" />
        </div>
        <div className='w-[500px] h-[65vh] mb-10 rounded-md relative top-[80px] translate-x-32 bg-[#f3e9dc]/80 backdrop-blur-md flex flex-col items-center justify-center'>
                  <h3 className='text-orange-500 text-[22px] font-bold italic font-[cursive]'>What we're offering</h3><br />
                  <h1 className='text-[40px] font-bold'>Get 30% off your first booking</h1>
          <CountdownTimer/>
          <button className="flex items-center bg-white hover:bg-green-600 text-green-600 hover:text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
                      Discover More <FaAngleDoubleRight className="ml-2" />
                    </button>
        </div>
      </div>
    </div>
  )
}
