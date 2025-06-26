import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2024',
      description: 'Comprehensive certification covering React fundamentals, hooks, state management, and advanced patterns.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'META-REACT-2024-001'
    },
    {
      title: 'Node.js Application Development',
      issuer: 'IBM',
      date: '2023',
      description: 'Backend development with Node.js, Express.js, and database integration best practices.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'IBM-NODE-2023-456'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'University of Sri Jayawardhana Pura',
      date: '2023',
      description: 'Complete web development course covering frontend, backend, and deployment strategies.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'USJP-FS-2023-789'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      description: 'Advanced JavaScript concepts, algorithms, and data structure implementations.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      credentialId: 'FCC-JS-2022-123'
    }
  ];

  const handleMoreClick = () => {
    alert('This would navigate to a detailed certificates page or open a modal with all certificates');
  };

  const handleViewCredential = (credentialId: string) => {
    alert(`View credential: ${credentialId}`);
  };

  return (
    <section id="certificates" className="py-20 bg-purple-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and academic achievements that validate my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Award className="text-orange-500" size={24} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </span>
                  <button
                    onClick={() => handleViewCredential(cert.credentialId)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Credential
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleMoreClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View All Certificates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;