import React, { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const backgrounds = ["bg-blue-500", "bg-red-500", "bg-green-500"];

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`transition duration-500 ease-in-out transform hover:scale-110 ${backgrounds[backgroundIndex]} w-32 h-32`}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
