import React, { useState } from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = {
    work: [
      {
        title: 'Digital Marketing Intern',
        company: 'Tops Digital Pvt Ltd',
        period: '2025 - Present',
        description: 'Assisting in digital marketing strategies, managing social media accounts, and creating content for various platforms. Collaborating with the marketing team to enhance online presence and engagement.',
        skills: ['Content creation', 'Social media handling']
      },
      {
        title: 'Information and Communication Technology Technician',
        company: 'Ministry of Ports & Shipping - Merchant Shipping Secretariat ',
        period: '2022 - 2023',
        description: 'Worked as a trainee ICT technician, providing technical support for office systems. Assisted in troubleshooting hardware and software issues, managed databases using Microsoft Access, and supported document preparation and presentations with Microsoft Office tools.',
        skills: ['Microsoft Office', 'Powerpoint', 'Excel', 'Access']
      }
    ],
    freelance: [
      {
        title: 'ගොඩයන Jobs . LK',
        company: 'Job Vacancy Web Application',
        period: '2025',
        description: 'Developed a comprehensive job vacancy web application allowing users to browse and find job opportunities across various categories. Included detailed job descriptions, information on overseas jobs and visas, and integrated online courses for skill development. Designed to be fully responsive and user-friendly.',
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB']
      }
    ],
    academic: [
        {
    title: 'Hallmate - Lecture Hall Booking System',
    company: 'University Group Project',
    period: '2024',
    description: 'Developed a web-based lecture hall booking system where lecturers can view timetables and book halls for extra sessions. Students can check schedules and available lectures. Built as a group project to streamline campus resource management.',
    skills: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Smart Eye Glasses for Blind People',
    company: 'University IoT Group Project',
    period: '2024',
    description: 'Created smart glasses designed to assist visually impaired individuals. The system uses sensors to detect nearby barriers and provides auditory alerts. In emergencies, users can press a button to send their location and a help request to family members.',
    skills: ['IoT', 'Embedded Systems', 'Arduino','Sensors']
  }
    ]
  };

  const tabs = [
    { id: 'work', label: 'Work', icon: Briefcase },
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
