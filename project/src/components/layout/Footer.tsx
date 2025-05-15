import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { SocialLink } from '../../types';

const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:selvarajan0259@gmail.com',
  },
  {
    name: 'Phone',
    icon: Phone,
    href: 'tel:+919600255627',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/selvarajan',
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-serif font-bold gradient-text mb-4">Selva Rajan E</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Creating efficient and user-friendly solutions with a focus on UI/UX design
              and system management.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              className="flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              Get in touch <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} Selva Rajan E. All rights reserved.</p>
          <p className="mt-2">
            Located in Tiruvannamalai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;