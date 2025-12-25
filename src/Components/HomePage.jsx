import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        src="photos/5200378-uhd_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Welcome to Our World
          </h1>
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
            Heavy equipment. Big power. Smooth logistics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
