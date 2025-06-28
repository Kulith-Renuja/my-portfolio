import React from 'react';
import { Download, Mail, MapPin, GraduationCap } from 'lucide-react';
import myCV from '../assets/my-cv.pdf';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'My-CV.pdf'; // This will be the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Alert user
   alert('CV downloaded successfully!');
  };

  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-green-950 pt-20 text-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
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
              <div className="flex items-center gap-2 bg-green-900 px-4 py-2 rounded-full shadow-md">
                <GraduationCap className="text-green-400" size={20} />
                <span className="text-white/90">BICT Student</span>
              </div>
              <div className="flex items-center gap-2 bg-green-900 px-4 py-2 rounded-full shadow-md">
                <MapPin className="text-green-300" size={20} />
                <span className="text-white/90">Kalutara</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={handleContactMe}
                className="flex items-center justify-center gap-2 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-green-900 to-black p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
                  <img
    src={profileImage}
    alt="My Profile"
    className="w-full h-full object-cover rounded-full"
  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-700 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white font-bold">React</span>
              </div>
              <div className="absolute -bottom-4 -left-9 w-16 h-16 bg-green-900 rounded-full flex items-center justify-center shadow-lg animate-pulse">
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
