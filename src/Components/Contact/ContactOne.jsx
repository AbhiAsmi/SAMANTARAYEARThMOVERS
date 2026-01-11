import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactOne = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current.children, {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-6">
      <div
        ref={formRef}
        className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Contact <span className="text-orange-500">Us</span>
        </h2>

        <form className="space-y-8">
          {[
            "Full Name",
            "Email",
            "Contact Number",
            "WhatsApp Number",
            "Work Purpose",
          ].map((label, i) => (
            <div key={i} className="relative">
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-gray-300 focus:border-orange-500 outline-none py-2 text-gray-800"
              />
              <label className="absolute left-0 top-2 text-gray-500 text-sm pointer-events-none">
                {label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              rows="3"
              className="w-full bg-transparent border-b border-gray-300 focus:border-orange-500 outline-none py-2 resize-none text-gray-800"
            ></textarea>
            <label className="absolute left-0 top-2 text-gray-500 text-sm pointer-events-none">
              Message
            </label>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-full font-semibold shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactOne;
