"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slideshow = (props) => {
  const images = props.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="flex justify-center items-center">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width="225"
          height="200"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={goToPrev}>⏮️ Previous</button>
        <button onClick={goToNext}>Next ⏭️</button>
      </div>
    </div>
  );
};

export default Slideshow;
