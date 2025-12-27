import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";

const HomePage = () => {
  const videoRef = useRef(null);

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
    gsap.fromTo(
      videoRef.current,
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
    );
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");

    emailjs
      .send(
        "SERVICE_ID",
        "TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          contact_number: formData.contact,
          whatsapp_number: formData.whatsapp,
          purpose: formData.purpose,
          message: formData.message,
        },
        "PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            contact: "",
            whatsapp: "",
            purpose: "",
            message: "",
          });
        },
        () => setStatus("error")
      );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="photos/5200378-uhd_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 text-white pt-[56px]">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Reliable Logistics <br /> & Heavy Equipment
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-md">
            We provide earthmoving, transport, and infrastructure solutions.
            Contact us for projects, rentals, and partnerships.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="md:w-1/2 w-full flex justify-center">
          <form
            onSubmit={sendEmail}
            className="
              w-full max-w-sm
              p-6
              rounded-2xl
              bg-white/15
              backdrop-blur-lg
              border border-white/25
              shadow-xl
            "
          >
            <h2 className="text-xl font-semibold text-center mb-4">
              Get In Touch
            </h2>

            {/* Inputs */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input underline mb-[10px]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input underline mb-[10px]"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="form-input underline mb-[10px]"
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleChange}
              className="form-input underline mb-[10px]"
            />
            <input
              type="text"
              name="purpose"
              placeholder="Work Purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="form-input underline mb-[10px]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="2"
              value={formData.message}
              onChange={handleChange}
              className="form-input resize-none"
            />

            <button
              type="submit"
              className="w-full mt-3 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold underline"
            >
              Send Message
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center mt-3">
                Message sent successfully
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-3">
                Failed to send message
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
