import React from "react";
export default function AboutUs() {
  return (
    <section className="bg-[#fbf7f2] text-[#0b0b0b] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            WHERE EXPERTISE MEETS EXCELLENCE
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium">— YOUR TRUST, OUR COMMITMENT.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-bold mb-6">WHY CHOOSE US?</h2>
           <p>With 40+ years of experience, a 60+ vehicle fleet, and 1000+ completed projects, Samantaray Earthmovers delivers trusted solutions for infrastructure and land development.
Our expertise in earthmoving, logistics, excavators, trailers, mixer machines, and road rollers ensures safe, timely, and long-lasting results.</p>

            <div className="space-y-6 text-sm md:text-base">
              <article>
                <h2 className="font-semibold ">Proven Scale & Trust :</h2>
                <p className="mt-2 text-gray-700">
                40+ years experience · 1000+ projects completed
                </p>
              </article>
              <article>
                <h2 className="font-semibold mt-[-15px]">Modern fleet</h2>
                <p className="mt-2 text-gray-700">
                  60+ vehicles including trailers, excavators, earthmovers, mixer machines, and road rollers
                </p>
              </article>

              <article>
                <h2 className="font-semibold  mt-[-15px]">End-to-end logistics</h2>
                <p className="mt-2 text-gray-700">
                  heavy haulage, route planning, and timely delivery
                </p>
              </article>

              <article>
                <h2 className="font-semibold  mt-[-15px]">Skilled teams & safety-first</h2>
                <p className="mt-2 text-gray-700">
                certified operators, strict safety protocols, and quality oversight
                </p>
              </article>
                 <article>
                <h2 className="font-semibold  mt-[-15px]">Efficiency & accountability</h2>
                <p className="mt-2 text-gray-700">
                 clear project management, transparent progress updates

                </p>
              </article>
                 <article>
                <h2 className="font-semibold  mt-[-15px]">Long-term value</h2>
                <p className=" text-gray-700">
                  work designed to perform reliably for years
                </p>
              </article>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl lg:max-w-md rounded-2xl overflow-hidden shadow-lg pt-[50px] bg-[#fbf7f2]">
              <img
                src="/photos/WhatsApp Image 2026-02-10 at 7.57.56 PM.jpeg"
                alt="Logistics and shipping trucks in a warehouse"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
