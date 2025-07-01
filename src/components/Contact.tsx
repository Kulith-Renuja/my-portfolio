import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        'service_w49wypg',
        'template_y99ajr9',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'SKWZIGegvhoI1ol5j'
      );

      console.log(result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kulith2001@gmail.com",
      link: "mailto:kulith2001@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+94 70 4 320132",
      link: "tel:+94 70 4 320132"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Kulith-Renuja?tab=repositories",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kulith-renuja-4306952a7/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3Ccircle cx=\'10\' cy=\'30\' r=\'2\'/%3E%3Ccircle cx=\'50\' cy=\'30\' r=\'2\'/%3E%3Ccircle cx=\'30\' cy=\'10\' r=\'2\'/%3E%3Ccircle cx=\'30\' cy=\'50\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-900/60 backdrop-blur-md rounded-lg border border-gray-800 hover:bg-gray-900/80 hover:border-accent-500/30 transition-all duration-300 group"
                >
                  <div className="text-accent-400 group-hover:text-accent-300 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.title}</div>
                    <div className="text-white font-medium">{info.details}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-900/60 backdrop-blur-md rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-900/80 hover:border-accent-500/30 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-300">Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-300">{errorMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-accent-600 hover:to-accent-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;