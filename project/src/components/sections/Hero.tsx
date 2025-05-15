import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (floatingRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = floatingRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        
        floatingRef.current.style.transform = `
          translate3d(${x * 20}px, ${y * 20}px, 0)
          rotate3d(${y}, ${x}, 0, 5deg)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (floatingRef.current) {
        floatingRef.current.style.transform = 'translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg)';
      }
    };

    const element = floatingRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <Section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 -z-10" />
      
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">SelvaRajan E</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              IT Professional & UI/UX Designer
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="https://github.com/selvarajane" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/selvarajan-e-3807ab344" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={handleScrollClick}
          className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus:outline-none"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </button>
      </div>
    </Section>
  );
};

export default Hero;