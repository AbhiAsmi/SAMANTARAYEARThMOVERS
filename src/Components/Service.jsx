import React, { useRef } from "react";

const services = [
  {
    title: "Infrastructure Development",
    image: "photos/infrastructure developement.png",
    video: "videos/Infrastructure_Video_Generation_Request.mp4",
    desc: "We provide advanced concrete mixer machines for a wide range of infrastructure projects, including building construction, bridges, highways, and dams, ensuring strong, reliable, and high-quality construction performance across every project.",
  },
  {
    title: "Land Site Development",
    image: "photos/landsite developement.png",
    video: "videos/istockphoto-1791029853-640_adpp_is.mp4",
    desc: "Advanced road machinery solutions for large projects.",
  },
  {
    title: "Road Construction",
    image: "photos/road_construction.png",
    video: "videos/istockphoto-2194819862-640_adpp_is.mp4",
    desc: " We provide reliable, high-performance road rollers and professional road construction services to ensure strong, smooth and long-lasting roads for every project.",
  },
  {
    title: "Waterline Project",
    image: "photos/waterline project.png",
    video: "videos/istockphoto-500124416-640_adpp_is.mp4",
    desc: "We provide powerful, heavy-duty trailers and transport support to safely carry large equipment, pipes, and materials for waterline construction and development projects, ensuring reliable performance and smooth execution from start to finish",
  },
];

const Service = () => {
  const videoRefs = useRef([]);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50 px-6 py-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-16 text-gray-900">
        Our <span className="text-orange-500">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl bg-white/70 backdrop-blur-md
                       border border-orange-100
                       transition-all duration-500
                       hover:shadow-[0_20px_40px_rgba(255,165,0,0.35)]
                       p-6"
          >
            <h2 className="text-center text-xl font-semibold mb-4
                           text-black group-hover:text-orange-500
                           transition-colors duration-300">
              {item.title}
            </h2>
            <div
              className="relative h-[340px] w-[72%] mx-auto overflow-hidden
                         rounded-xl cursor-pointer bg-white"
              onClick={() => togglePlay(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain
                           transition-opacity duration-500
                           md:group-hover:opacity-0"
              />

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain
                           opacity-0 transition-opacity duration-500
                           md:group-hover:opacity-100"
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-center text-gray-600 text-sm mt-6 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
