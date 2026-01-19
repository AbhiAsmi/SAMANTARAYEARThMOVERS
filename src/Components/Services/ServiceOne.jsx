import React from "react";

const ServiceOne = () => {
  return (
    <section className="relative w-full min-h-screen pt-8 bg-white overflow-hidden">
      
      {/* LEFT ORANGE IMAGE SECTION (DESKTOP ONLY) */}
      <div className="hidden lg:block absolute left-0 top-0 h-full w-[38%]">
        <img
          src="https://media.istockphoto.com/id/1249305115/photo/crane-working-near-sand-quarry.jpg?s=2048x2048&w=is&k=20&c=xWa6RBL5WDc5R45Nsr2iccoHS-4Z7asPepneqQvAu6s="
          alt="Earthmoving Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-500/80"></div>
      </div>

      {/* MOBILE / TABLET IMAGE WITH ORANGE OVERLAY */}
      <div className="relative lg:hidden w-full h-[55vh]">
        <img
          src="https://media.istockphoto.com/id/1249305115/photo/crane-working-near-sand-quarry.jpg?s=2048x2048&w=is&k=20&c=xWa6RBL5WDc5R45Nsr2iccoHS-4Z7asPepneqQvAu6s="
          alt="Earthmoving"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-500/70"></div>

        <h1 className="absolute bottom-8 left-6 right-6 text-3xl font-extrabold text-white leading-tight">
          Comprehensive Earthmoving Services
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-0">
        
        {/* CENTER IMAGE (DESKTOP ONLY) */}
        <div className="hidden lg:block ml-[18%] mt-24 w-[38%] bg-white shadow-xl">
          <img
            src="https://media.istockphoto.com/id/108274644/photo/yellow-excavator-at-construction-site.webp?s=2048x2048&w=is&k=20&c=dKdjh3EduL_9EM5MF7T2k5zac_mQDEmRsf_lIfG8EVg="
            alt="Excavator"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="lg:ml-16 max-w-xl mt-12 lg:mt-0">
          <h1 className="hidden lg:block text-4xl font-extrabold text-black mb-6 leading-tight">
            Comprehensive Earthmoving Services
          </h1>

          <p className="font-semibold text-black mb-6">
            At Kasturi Earthmovers, we offer extensive earthmoving services to
            meet the construction and development needs of earthmoving companies
            and earthmoving contractors.
          </p>

          <p className="text-gray-700 mb-5 leading-relaxed">
            With a fleet of modern earthmovers, experienced operators, and a
            commitment to quality, we provide efficient earthmoving services. We
            ensure that your earthmoving projects are executed with precision
            and professionalism.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our earthmoving services encompass excavation, grading, site
            preparation, and land clearing. Whether you need to prepare a
            construction site, create building foundations or reshape
            landscapes, our skilled team is equipped to handle projects of any
            scale.
          </p>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
      >
        ↑
      </button>
    </section>
  );
};

export default ServiceOne;
