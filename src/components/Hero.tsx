import React, { Suspense, lazy } from 'react';
import { Download, Mail, MapPin, GraduationCap } from 'lucide-react';
import myCV from '../assets/my-cv.pdf';
import profileImage from '../assets/profile22.jpg';

// Lazy load Spline for performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'My-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('CV downloaded successfully!');
  };

  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-black" style={{ minHeight: '100dvh' }}>
      {/* ===== LAYER 1: 3D Spline Background (z-0) ===== */}
      <div className="absolute inset-0 z-0 spline-container" style={{ transform: 'scale(1.15) translateX(12%)', transformOrigin: 'center center' }}>
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-black via-neutral-900 to-green-950 flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-[#4ade80]/30 border-t-[#4ade80] rounded-full animate-spin" />
            </div>
          }
        >
          <Spline scene="https://prod.spline.design/QTHi9-orsiu64SAB/scene.splinecode" />
        </Suspense>
      </div>

      {/* Bottom fade to hide section below */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* ===== LAYER 2: UI Overlay (z-10) ===== */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
        {/* Main content area */}
        <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-24">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 w-full">
            {/* ===== LEFT SIDE: Text Content ===== */}
            <div className="flex-1 text-center lg:text-left pointer-events-auto animate-fadeInUp max-w-2xl">
              {/* Greeting */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-[#4ade80]">Kulith Renuja</span>
              </h1>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-medium mb-5">
                Software Engineer | Full Stack Developer
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
                Final year BICT student at University of Sri Jayewardenepura, passionate about
                building innovative full-stack web applications and creating digital solutions that
                make a difference.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 bg-[#4ade80]/10 border border-[#4ade80]/30 px-4 py-2 rounded-full">
                  <GraduationCap className="text-[#4ade80]" size={18} />
                  <span className="text-white/90 text-sm font-medium">BICT Student</span>
                </div>
                <div className="flex items-center gap-2 bg-[#4ade80]/10 border border-[#4ade80]/30 px-4 py-2 rounded-full">
                  <MapPin className="text-[#4ade80]" size={18} />
                  <span className="text-white/90 text-sm font-medium">Kalutara</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center justify-center gap-2 border border-[#4ade80]/50 text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#4ade80]/10 hover:border-[#4ade80] transition-all duration-300 transform hover:scale-[1.03]"
                >
                  <Download size={18} />
                  Download CV
                </button>
                <button
                  onClick={handleContactMe}
                  className="flex items-center justify-center gap-2 border border-[#4ade80]/50 text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#4ade80]/10 hover:border-[#4ade80] transition-all duration-300 transform hover:scale-[1.03]"
                >
                  <Mail size={18} />
                  Contact Me
                </button>
              </div>
            </div>

            {/* ===== RIGHT SIDE: Floating Elements + Portrait Card ===== */}
            <div className="flex-1 relative hidden lg:flex items-center justify-center min-h-[500px]">
              {/* Floating Tech Badges */}
              <div className="absolute top-4 left-8 animate-float pointer-events-auto">
                <TechBadge name="React" color="#61DAFB" />
              </div>
              <div className="absolute top-16 right-4 animate-float-slow pointer-events-auto">
                <TechBadge name="TypeScript" color="#3178C6" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 animate-float-slower pointer-events-auto">
                <TechBadge name="Node" color="#68A063" />
              </div>
              <div className="absolute bottom-24 right-12 animate-float-delayed pointer-events-auto">
                <TechBadge name="Next.js" color="#ffffff" />
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== Tech Badge Component ===== */
interface TechBadgeProps {
  name: string;
  color: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, color }) => (
  <div className="tech-badge glass-card rounded-full px-4 py-2 flex items-center gap-2 cursor-default select-none">
    <span
      className="w-2.5 h-2.5 rounded-full"
      style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
    />
    <span className="text-white text-sm font-medium whitespace-nowrap">{name}</span>
  </div>
);



export default Hero;
