"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CloudCog, BrainCircuit, Rocket } from 'lucide-react';
import Services from './Services';
import FAQ from './FAQ';
import Contact from './Contact';
import Blog from './Blog';

const TiltCard = ({ children, className }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / box.width) * 100,
      y: (y / box.height) * 100,
      opacity: 0.4
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: tilt.x === 0 && tilt.y === 0 ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
        willChange: 'transform'
      }}
      className={`${className} cursor-pointer relative group`}
    >
      {/* Dynamic Glare Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-50 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          opacity: glare.opacity
        }}
      />
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/it.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay ONLY on video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

        {/* Content */}
        <div className="flex flex-col items-center relative justify-center h-full text-center px-4 sm:px-6 lg:px-8 text-white z-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 slide-up leading-tight">
            <span className="font-light">Managed IT Services for</span> <br className="hidden sm:block" /> <span className="block">Growth Minded Businesses</span>
          </h1>

          <p className="glass-shimmer text-lg sm:text-xl lg:text-2xl font-light mb-6 sm:mb-8 lg:mb-10 slide-up max-w-3xl">
            Unlocking Potential, Unleashing Innovation
          </p>

          {/* Button Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
            <Link
              href="/about-us"
              className="w-full sm:w-auto bg-black text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md uppercase hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Read More
            </Link>

            <Link
              href="/contact-us"
              className="w-full sm:w-auto bg-white text-black text-base sm:text-lg lg:text-xl xl:text-2xl font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md uppercase hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Strategic Expertise Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 slide-up leading-tight">
              GET THE STRATEGIC EXPERTISE YOU NEED - BEYOND BASIC IT SUPPORT!
            </h2>
            <p className="glass-shimmer text-lg sm:text-xl slide-up">
              Unlocking Potential, Unleashing Innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto slide-up" style={{ perspective: '2000px' }}>
            <TiltCard className="group text-center bg-white/80 backdrop-blur-xl hover:bg-white transition-all duration-700 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white/20">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Floating Background Blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700 group-hover:scale-150"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700 group-hover:scale-150 delay-100"></div>

              {/* Icon with front parallax layer */}
              <div className="mb-4 sm:mb-6 transform transition-all duration-700 group-hover:translate-z-20 group-hover:scale-110">
                <CloudCog className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mx-auto text-primary filter drop-shadow-2xl animate-pulse-slow" />
              </div>

              <div className="transform transition-all duration-700 group-hover:translate-z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">Apply Cloud Based Platforms</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                  Experience a seamless transition to Cloud computing. Utilizing our expertise,
                  we can tailor solutions for migrating your data and applications to the cloud,
                  ensuring uniform integration and ongoing support.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group text-center bg-white/80 backdrop-blur-xl hover:bg-white transition-all duration-700 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white/20">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700 group-hover:scale-150"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700 group-hover:scale-150 delay-100"></div>

              <div className="mb-4 sm:mb-6 transform transition-all duration-700 group-hover:translate-z-20 group-hover:scale-110">
                <BrainCircuit className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mx-auto text-primary filter drop-shadow-2xl animate-pulse-slow" />
              </div>

              <div className="transform transition-all duration-700 group-hover:translate-z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">Leverage AI-Powered Solutions</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                  Embrace the future with our AI expertise. By integrating the capabilities of AI
                  with in-depth industry knowledge, we deliver intelligent solutions that give you a
                  competitive advantage.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="group text-center bg-white/80 backdrop-blur-xl hover:bg-white transition-all duration-700 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:col-span-2 lg:col-span-1 relative overflow-hidden border border-white/20">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700 group-hover:scale-150"></div>

              <div className="mb-4 sm:mb-6 transform transition-all duration-700 group-hover:translate-z-20 group-hover:scale-110">
                <Rocket className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mx-auto text-primary filter drop-shadow-2xl animate-pulse-slow" />
              </div>

              <div className="transform transition-all duration-700 group-hover:translate-z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">Embrace Digital Transformation</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                  Transition seamlessly into the digital era with our team of digital transformation experts.
                  Explore ways to optimize your operations and uncover new opportunities for growth and innovation.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* IT Services Grid Section */}
      <Services />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <Contact />

      {/* Blog Section */}
      <Blog />
    </div>
  )
}
