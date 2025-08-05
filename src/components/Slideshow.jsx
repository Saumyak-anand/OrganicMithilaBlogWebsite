"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slideshow = (props) => {
  const images = props.images;
  const name = props.name;
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
        <div className="flex flex-col justify-center items-center">
          <div className="mb-{3px}">
            <h2 className="font-extrabold text-cyan-600 text-2xl">
              {name[currentIndex]}
            </h2>
          </div>
          <div
            style={{
              position: "relative",
              width: "200px", // Set the width on the parent
              height: "200px", // Set the height on the parent
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill // This makes the image fill the parent
              style={{ objectFit: "contain" }} // This scales the image to fit without cropping
              sizes="(max-width: 768px) 100vw, 50vw" // Add sizes for best performance
              priority
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "5px" }}>
        <button onClick={goToPrev}>⏮️</button>
        <button onClick={goToNext}>⏭️</button>
      </div>
    </div>
  );
};

export default Slideshow;
