import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactOne = () => {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    gsap.from(".field", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_nbvvy7h",     
        "template_sgmx3nk",  
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "YviM0hNmjeOjquTh0"   
      );

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div
        className="
          relative w-full max-w-4xl
          h-auto md:h-[420px]
          rounded-xl overflow-hidden
          border border-orange-600
          shadow-[0_0_50px_rgba(120,60,255,0.5)]
          flex flex-col md:flex-row
        "
      >
        <div
          className="
            w-full md:w-1/2
            bg-gradient-to-br from-orange-600 to-orange-700
            p-8 md:p-10
            flex flex-col justify-center
          "
        >
          <h2 className="text-black text-3xl font-bold mb-4">
            CONTACT US
          </h2>
          <p className="text-purple-200 text-sm">
            Drop your details and we’ll reach out to you shortly.
          </p>
        </div>

        {/* SKEW DIVIDER (DESKTOP ONLY) */}
        <div className="hidden md:block absolute left-[48%] top-0 w-22 h-full bg-[#0b061a] -skew-x-12 origin-top"></div>

        {/* FORM SECTION */}
        <div
          className="
            w-full md:w-1/2
            md:ml-[35px]
            bg-white
            p-8 md:p-10
            flex flex-col justify-center
          "
        >
          <h3 className="text-black text-xl font-semibold mb-6">
            Send Message
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="field">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="input"
              />
              {errors.name && <Error text={errors.name.message} />}
            </div>

            <div className="field">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                placeholder="Email"
                className="input"
              />
              {errors.email && <Error text={errors.email.message} />}
            </div>

            <div className="field">
              <input
                {...register("phone", {
                  required: "Contact number required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 digits",
                  },
                })}
                placeholder="Contact Number"
                className="input"
              />
              {errors.phone && <Error text={errors.phone.message} />}
            </div>

            <div className="field">
              <textarea
                rows="2"
                {...register("message", { required: "Message required" })}
                placeholder="Message"
                className="input resize-none"
              />
              {errors.message && <Error text={errors.message.message} />}
            </div>

            <button
              disabled={isSubmitting}
              className="w-full mt-2 bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-full text-sm font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Error = ({ text }) => (
  <p className="text-red-400 text-xs mt-1">{text}</p>
);

export default ContactOne;
