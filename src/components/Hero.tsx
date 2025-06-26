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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-900 pt-20 text-white">

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-white/80 font-medium mb-6">

                Software Engineer | React & Node.js Developer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Final year BICT student at University of Sri Jayawardhana Pura, passionate about building 
                innovative full-stack web applications and creating digital solutions that make a difference.
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <GraduationCap className="text-blue-600" size={20} />
                <span className="text-gray-700">BICT Student</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <MapPin className="text-teal-600" size={20} />
                <span className="text-gray-700">Sri Lanka</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={handleContactMe}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {/* Placeholder for photo - replace with actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-4"></div>
                      <p className="text-sm">Your Photo Here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
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