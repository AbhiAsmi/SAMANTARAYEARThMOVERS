import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactTwo = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.from(leftRef.current.children, {
      opacity: 0,
      x: -60,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(rightRef.current.children, {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT — INFO */}
        <div ref={leftRef}>
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Let’s <span className="text-orange-500">Connect</span>
          </h2>

          <p className="text-gray-600 mb-10 max-w-md">
            Reach out to us for land development, infrastructure projects, or
            machinery services. Our team will respond promptly.
          </p>

          <div className="space-y-6 text-gray-700">
            <p><strong>📍 Address:</strong> Your Company Address</p>
            <p><strong>📞 Phone:</strong> +91 9XXXXXXXXX</p>
            <p><strong>✉️ Email:</strong> info@yourcompany.com</p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div ref={rightRef} className="bg-[#f9fafb] p-10 rounded-3xl shadow-xl">
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
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;
