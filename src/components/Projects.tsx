import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import project1 from '../assets/project_1.png';
import project2 from '../assets/project_2.png';
import project3 from '../assets/project_3.png';


const Projects: React.FC = () => {
  const projects = [
    {
      title: "Job Vacancy Web Application",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, cart management, and order processing.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Kulith-Renuja/job-portal-frontend.git",
      demo: "https://www.godayana.lk/",
      featured: true
    },
    {
      title: "AI-Powered Mobility Assistant for the Visually Impaired",
      description: "An advanced, multimodal Flutter application designed to provide seamless indoor and outdoor navigation for visually impaired users. This project combines custom A* graph-based indoor routing, GPS-driven outdoor navigation, and a highly memory-optimized headless YOLOv8 machine learning model to act as a real-time hazard guardian.",
      image: project2,
      technologies: ["Flutter", "Firebase", "YoloNanoV8"],
      github: "https://github.com/Kulith-Renuja/Navigation-system",
      demo: "https://drive.google.com/drive/folders/1vC3CRRthqVMVig52CcZfypMEWf5REGZn",
      featured: true
    },
    {
      title: "Digital marketing agency portfolio",
      description: "A polished digital marketing agency portfolio built using HTML, CSS, and PHP highlights specialized services like SEO, social media management, and paid ad campaigns to convert visitors into clients. It features modern, responsive designs customized from templates, showcasing case studies, client testimonials, and a clear call-to-action.",
      image: project3,
      technologies: ["HTML", "CSS", "PHP"],
      github: "https://github.com/Kulith-Renuja/digital-agency-portfolio",
      demo: "https://kulith-renuja.github.io/digital-agency-portfolio/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-secondary-900">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'2\'/%3E%3Ccircle cx=\'5\' cy=\'15\' r=\'1\'/%3E%3Ccircle cx=\'25\' cy=\'15\' r=\'1\'/%3E%3Ccircle cx=\'15\' cy=\'5\' r=\'1\'/%3E%3Ccircle cx=\'15\' cy=\'25\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
            Featured Projects
            
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-accent-500/10 border border-gray-800 hover:border-accent-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-accent-600/20 border border-gray-700 hover:border-accent-500 transition-all duration-300"
                  >
                    <Github size={20} className="text-gray-300 hover:text-accent-400" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-accent-600/20 border border-gray-700 hover:border-accent-500 transition-all duration-300"
                  >
                    <ExternalLink size={20} className="text-gray-300 hover:text-accent-400" />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent-600/20 text-accent-400 border border-accent-500/30 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-accent-500/10 border border-gray-800 hover:border-accent-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-accent-600/20 border border-gray-700 hover:border-accent-500 transition-all duration-300"
                    >
                      <Github size={16} className="text-gray-300 hover:text-accent-400" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-accent-600/20 border border-gray-700 hover:border-accent-500 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="text-gray-300 hover:text-accent-400" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-accent-600/20 text-accent-400 border border-accent-500/30 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/60 text-gray-400 border border-gray-700 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/25"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;