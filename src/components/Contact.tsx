import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mouadmaafi1@gmail.com",
      href: "mailto:mouadmaafi1@gmail.com",
      copyText: "mouadmaafi1@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "+212 615541393",
      href: "tel:+212615541393",
      copyText: "+212615541393"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localisation",
      value: "Oujda, Maroc",
      href: "#",
      copyText: "Oujda, Maroc"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/mouad-dot",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mouad-m-370814310/",
      color: "hover:text-blue-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Restons en{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              contact
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Collaborons ensemble
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Je suis toujours ouvert aux discussions sur des projets innovants, 
                  des collaborations techniques ou simplement pour échanger sur l'IA 
                  et les technologies émergentes.
                </p>
                <p className="text-gray-400">
                  N'hésitez pas à me contacter pour discuter de vos idées ou projets !
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-400">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-white hover:text-blue-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(item.copyText, item.label)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {copied === item.label ? <Check size={18} /> : <Copy size={18} />}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  Réseaux sociaux
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className={`flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 ${link.color}`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Prêt à collaborer ?
                </h3>
                <p className="text-gray-300 mb-6">
                  Que ce soit pour un projet d'IA, une analyse de données ou une innovation technologique, 
                  je suis enthousiaste à l'idée de contribuer à des solutions impactantes.
                </p>
                <motion.a
                  href="mailto:mouadmaafi1@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Mail size={18} />
                  <span>Envoyer un message</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;