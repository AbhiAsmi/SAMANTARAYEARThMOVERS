import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 3000; // SLOW count (3 seconds)
    const stepTime = 30;
    const increment = target / (duration / stepTime);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, target]);

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-4xl font-bold text-black">{count}</h2>
      <p className="text-sm text-gray-600 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Earthmoving Services, <br />
            Everlasting Value
          </h1>

          <div className="w-12 h-1 bg-orange-500 my-6"></div>

          <p className="text-gray-700 mb-4">
            We pride ourselves on being a leading provider
            of comprehensive earthmoving services and infrastructure development
            solutions.
          </p>

          <p className="text-gray-700 mb-10">
            With years of experience in the industry, we have earned a reputation
            for delivering exceptional results and exceeding our clients’
            expectations.
          </p>

          {/* STATS */}
          <div className="flex gap-12">
            <Counter start={startCount} target={10} label="Years of Experience" />
            <Counter start={startCount} target={200} label="Successful Projects" />
            <Counter start={startCount} target={30} label="Machines & Equipment" />
          </div>
        </div>

        <div className="relative">
          <img
            src="photos/istockphoto-2182815724-1024x1024.jpg"
            alt="Earthmoving Machine"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-white/40 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
