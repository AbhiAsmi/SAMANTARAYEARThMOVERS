import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaMap
} from "react-icons/fa6";

const Owner = () => {
  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/biplab.samantaray.7" },
    { icon: FaFacebookF, url: "https://www.facebook.com/share/18FYvswNYs/" },
    { icon: FaWhatsapp, url: "https://wa.me/919040224655" },
    { icon: FaMap, url: "https://goo.gl/maps/sojGh3DHuRHUJD2T6?g_st=aw" },
  ];
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <section className="relative text-gray-300 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('photos/ChatGPT Image Dec 21, 2025, 12_29_54 PM.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-white/10"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          <div>
            <div className="flex gap-4 mb-6">
              {[FaInstagram, FaFacebookF, FaWhatsapp, FaMap].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href={socialLinks[i].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-11 h-11 flex items-center justify-center
                      rounded-full bg-black/60 text-white
                      transition-all duration-300
                      hover:bg-orange-500 hover:text-black
                      hover:scale-110 hover:-translate-y-1
                      hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]
                    "
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              Samantray Earthmovers
            </h1>

            <div className="w-16 h-[3px] bg-orange-500 mt-3 mb-6"></div>

            <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
              Samantray Earthmovers is a trusted name in logistics and infrastructure
              services, delivering excellence with integrity, efficiency, and
              commitment for decades.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <User className="text-orange-500" />
                <span>
                  <strong className="text-white">Biplab Samantaray</strong> – CEO
                </span>
              </div>

              <p className="text-sm">
                Founded in{" "}
                <span className="text-orange-400 font-semibold">1985</span> by{" "}
                <span className="text-white font-semibold">
                  Pabitra Mohan Samantaray
                </span>
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1b1b1b]/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-orange-500/20 transition"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              Contact Details
            </h2>

            <div className="space-y-5 text-gray-400">
              <div className="flex gap-3 items-center">
                <Phone className="text-orange-500" />
                <span>+91 90402 24655</span>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="text-orange-500" />
                <span>biplabsamantaray1984@gmail.com</span>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin className="text-orange-500 mt-1" />
                <span>
                  Chandaka, Bhubaneswar, <br />
                  Odisha – 751024
                </span>
              </div>
            </div>

            <motion.button
            href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="mt-10 w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-lg transition"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
          <div className="absolute bottom-1 md:left-[40%] left-[10%]"><a href="https://tegnifix.com/">© 2026 <span className="text-orange-500">Tegnifix.com</span> · All Rights Reserved</a></div>
      </div>
    </section>
  );
};

export default Owner;
