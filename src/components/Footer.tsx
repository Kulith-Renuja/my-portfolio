import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12 relative border-t border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
              Alex Johnson
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating amazing web experiences
            </p>
          </div>

          <div className="flex justify-center items-center space-x-2 text-gray-400 mb-8">
            <span>Made with</span>
            <Heart size={16} className="text-green-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="border-t border-green-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-green-700 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
