import React from 'react';
import { Code, Lightbulb, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Solutions",
      description: "Innovative approaches to complex problems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Focus",
      description: "Committed to delivering high-quality results"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-primary-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital experiences that make a difference. My journey in tech 
                started with curiosity and has evolved into a deep love for crafting 
                elegant solutions to complex problems.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I specialize in modern web technologies including React, Node.js, and 
                cloud platforms. When I'm not coding, you'll find me exploring new 
                technologies, contributing to open source projects, or sharing knowledge 
                with the developer community.
              </p>

              <p className="text-lg leading-relaxed">
                I believe in writing code that not only works but is also maintainable, 
                scalable, and a joy to work with. Let's build something amazing together!
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-primary-200 rounded-full text-primary-700 font-medium hover:bg-primary-100 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-primary-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;