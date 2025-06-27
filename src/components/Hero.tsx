import React from 'react';
import { Download, Mail, MapPin, GraduationCap } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // You can replace this with actual CV download logic
    alert('CV download functionality will be implemented with actual CV file');
  };

  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-secondary-900 pt-20 text-white">
  <div className="container mx-auto px-6 py-20">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Side - Content */}
      <div className="flex-1 text-center lg:text-left">
        <div className="mb-6">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-300 to-gray-700 bg-clip-text text-transparent">
              Kulith Renuja
            </span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-white/80 font-medium mb-6">
            Software Engineer | React & Node.js Developer
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Final year BICT student at University of Sri Jayewardenepura, passionate about building 
            innovative full-stack web applications and creating digital solutions that make a difference.
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
          <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full shadow-md">
            <GraduationCap className="text-indigo-400" size={20} />
            <span className="text-white/90">BICT Student</span>
          </div>
          <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full shadow-md">
            <MapPin className="text-teal-400" size={20} />
            <span className="text-white/90">Sri Lanka</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={handleDownloadCV}
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Download CV
          </button>
          <button
            onClick={handleContactMe}
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Side - Photo */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 p-2 shadow-2xl">
            <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
              {/* Placeholder for photo - replace with actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-500 rounded-full mx-auto mb-4"></div>
                  <p className="text-sm">Your Photo Here</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white font-bold">React</span>
          </div>
          <div className="absolute -bottom-4 -left-9 w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white font-bold">Node</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;