import React, { useState } from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('internship');

  const experiences = {
    internship: [
      {
        title: 'Software Engineering Intern',
        company: 'Tech Company Ltd',
        period: '2024 - Present',
        description: 'Developed React applications and worked on Node.js backend services. Collaborated with senior developers on full-stack projects.',
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js']
      },
      {
        title: 'Junior Developer Intern',
        company: 'Startup Inc',
        period: '2023 - 2024',
        description: 'Built responsive web interfaces and implemented RESTful APIs. Gained experience in modern web development practices.',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'API Integration']
      }
    ],
    freelance: [
      {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: '2023 - Present',
        description: 'Created custom websites for small businesses and startups. Delivered mobile-responsive solutions with modern design.',
        skills: ['React', 'Tailwind CSS', 'Firebase', 'Responsive Design']
      },
      {
        title: 'E-commerce Developer',
        company: 'Various Clients',
        period: '2023',
        description: 'Built online stores with payment integration and inventory management systems.',
        skills: ['Next.js', 'Stripe API', 'Database Design', 'Payment Integration']
      }
    ],
    academic: [
      {
        title: 'Team Lead - Final Year Project',
        company: 'University of Sri Jayawardhana Pura',
        period: '2024',
        description: 'Leading a team of 4 students in developing a comprehensive web application for university management.',
        skills: ['Project Management', 'Full-Stack Development', 'Team Leadership', 'MERN Stack']
      },
      {
        title: 'Research Assistant',
        company: 'Faculty of Technology',
        period: '2023 - 2024',
        description: 'Assisted professors in web development research and helped junior students with programming concepts.',
        skills: ['Research', 'Teaching', 'Web Technologies', 'Documentation']
      }
    ]
  };

  const tabs = [
    { id: 'internship', label: 'Internships', icon: Briefcase },
    { id: 'freelance', label: 'Freelance', icon: ExternalLink },
    { id: 'academic', label: 'Academic', icon: Calendar }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            My Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A journey through various roles and projects that shaped my development as a software engineer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-green-800 text-white shadow-lg'
                    : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Experience Content */}
          <div className="space-y-8">
            {experiences[activeTab as keyof typeof experiences].map((exp, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-green-800"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-green-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-800 px-4 py-2 rounded-lg">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-green-700/20 text-green-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
