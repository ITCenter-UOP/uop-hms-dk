import React from "react";
import { ArrowRight } from "lucide-react";
import sitelogo from "../assets/uoplogo.png"; // adjust path
import bgimage from "../assets/uop_Image.jpg"; // background image

const HomePage = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient + overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Floating particles effect (optional decoration) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse bottom-20 right-24"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center space-y-10 py-20 px-8 
                      bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 animate-fadeInUp">
        {/* Logo */}
        <img
          src={sitelogo}
          alt="University of Peradeniya Hostel Management System Logo"
          className="w-72 md:w-96 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-110"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug tracking-tight text-white drop-shadow-xl">
          University of Peradeniya <br />
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
            Hostel Management System
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
          A next-generation platform to manage hostel allocations, warden assignments,
          and facilities — built for <span className="font-semibold text-white">simplicity, transparency, and efficiency.</span>
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a
            href="/Env/Home"
            className="group px-10 py-4 rounded-2xl font-semibold text-lg text-white
                       bg-gradient-to-r from-gray-900 to-gray-700
                       shadow-lg hover:shadow-2xl hover:scale-105
                       transition-all duration-300 ease-out flex items-center"
          >
            Get Started
            <ArrowRight size={22} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="/test-form"
            className="px-10 py-4 rounded-2xl font-semibold text-lg text-gray-200
                       border border-white/40 bg-white/10
                       hover:bg-white/20 hover:text-white
                       shadow-md hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
