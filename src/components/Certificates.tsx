import React, { useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import certificate1 from '../assets/certificate_1.jpg';
import certificate2 from '../assets/certificate_2.jpg';


const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certificates = [
    {
      title: 'Certificate of Appreciation - J\'Pura CryptX 1.0',
      issuer: 'Information and Communication Technology Society, University of Sri Jayewardenepura',
      date: '2025',
      description: 'Awarded in recognition of outstanding support as a Media and Marketing Team Member for J\'Pura CryptX 1.0, an event organized by the ICT Society.',
      image: certificate1, 
      credentialId: 'CRYPTX-2025-KRG001'
    },
    {
      title: 'Certificate of Participation - KULITH RENUJA Event',
      issuer: 'Organizing Committee (Assumed or fill in actual name)',
      date: '2025',
      description: 'Recognized participation in the KULITH RENUJA event. Awarded to Pruthivithejan for their involvement and contributions.',
      image: certificate2,
      credentialId: 'RENUJA-2025-PRU001'
    }
  ];

  /*const handleMoreClick = () => {
    alert('This would navigate to a detailed certificates page or open a modal with all certificates');
  };*/

  const handleViewCredential = (credentialId: string) => {
     const cert = certificates.find(c => c.credentialId === credentialId);
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and academic achievements that validate my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-green-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-top object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-green-900 rounded-full p-2 shadow-lg">
                  <Award className="text-green-400" size={24} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-green-400 font-semibold">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">{cert.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-300 font-mono bg-green-800/20 px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </span>
                  <button
                    onClick={() => handleViewCredential(cert.credentialId)}
                    className="flex items-center gap-1 text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Credential
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button 
        <div className="text-center mt-12">
          <button
            onClick={handleMoreClick}
            className="bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View All Certificates
          </button>
        </div>*/}
      </div>
      {modalOpen && selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-green-800 rounded-xl max-w-3xl w-full relative overflow-hidden shadow-lg">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-green-400 hover:text-green-300 bg-neutral-800 rounded-full p-2 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[80vh] object-contain bg-black"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
              <p className="text-green-400 font-semibold mb-2">{selectedCert.issuer}</p>
              <p className="text-gray-300">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
