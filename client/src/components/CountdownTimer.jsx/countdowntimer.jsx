import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getInitialTimeLeft());

  // Check or set the end time in localStorage
  function getInitialTimeLeft() {
    let end = localStorage.getItem('countdownEnd');
    if (!end) {
      const newEnd = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem('countdownEnd', newEnd.toString());
      end = newEnd;
    }

    return calculateTime(end - Date.now());
  }

  function calculateTime(ms) {
    if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const end = localStorage.getItem('countdownEnd');
      if (!end) return;

      const remaining = Number(end) - Date.now();
      setTimeLeft(calculateTime(remaining));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 rounded-xl text-center max-w-xl mx-auto">
      <div className="flex justify-center gap-6 text-white text-lg font-medium">
        <div className="bg-green-600 px-4 py-2 rounded-md shadow-xl">
          <div className="text-2xl">{timeLeft.days}</div>
          <div>Days</div>
        </div>
        <div className="bg-green-600 px-4 py-2 rounded-md shadow-xl">
          <div className="text-2xl">{timeLeft.hours}</div>
          <div>Hours</div>
        </div>
        <div className="bg-green-600 px-4 py-2 rounded-md shadow-xl">
          <div className="text-2xl">{timeLeft.minutes}</div>
          <div>Minutes</div>
        </div>
        <div className="bg-green-600 px-4 py-2 rounded-md shadow-xl">
          <div className="text-2xl">{timeLeft.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
