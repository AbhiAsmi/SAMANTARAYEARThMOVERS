import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";

const HomePage = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    whatsapp: "",
    purpose: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    // Video animation
    gsap.fromTo(
      videoRef.current,
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
    );

    // Center text animation (bottom → up with stagger)
    gsap.fromTo(
      textRef.current.children,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        delay: 0.4,
      }
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="photos/5200378-uhd_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* CENTERED TEXT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white px-6">
        <div
          ref={textRef}
          className="flex flex-col items-center gap-5 text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Reliable{" "}
            <span className="text-orange-400">Logistics</span> <br />
            & Heavy Equipment
          </h1>

          <p className="text-[20px] md:text-lg text-gray-200">
            We provide earthmoving, transport, and infrastructure solutions.
            Contact us for projects, rentals, and partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
