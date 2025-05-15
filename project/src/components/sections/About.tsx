import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Download, ExternalLink } from 'lucide-react';
import selvaImg from '../../selva.jpg.jpg';

const About: React.FC = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

  const handleResumeDownload = () => {
    // Update the URL to match the actual filename
    const resumeUrl = '/resume.pdf.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'Selvarajan_Resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    if (animatedElementsRef.current) {
      const elements = animatedElementsRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section 
      id="about" 
      title="SelvaRajan E"
      subtitle="Get to know me better"
    >
      <div 
        ref={animatedElementsRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div className="relative animate-on-scroll">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src={selvaImg} 
              alt="Selva Rajan" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-primary-100 dark:bg-primary-900 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-secondary-100 dark:bg-secondary-900 rounded-2xl -z-10"></div>
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-serif font-bold mb-6">
            IT Professional & UI/UX Designer
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a motivated B.Sc. Information System Management professional with a strong background in UI/UX design and Figma, coupled with expertise in system hardware and software solutions. I'm passionate about enhancing productivity and collaboration.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            At UNIQUE IT SOLUTION, I've gained valuable experience in diagnosing and resolving system hardware issues, managing system configurations, and implementing effective solutions for improved system efficiency.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I specialize in creating user-friendly interfaces and prototypes using Figma, ensuring seamless integration between web and mobile applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={handleResumeDownload}
              variant="primary"
              className="cursor-pointer"
            >
              <Download size={18} className="mr-2" /> Download Resume
            </Button>
            <Button href="#contact" variant="outline">
              <ExternalLink size={18} className="mr-2" /> Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 animate-on-scroll" animate>
          <h4 className="text-xl font-bold mb-4">Experience</h4>
          <p className="text-gray-700 dark:text-gray-300">
            IT Professional at UNIQUE IT SOLUTION, focusing on system hardware solutions and UI/UX design implementation.
          </p>
        </Card>
        
        <Card className="p-8 animate-on-scroll" animate>
          <h4 className="text-xl font-bold mb-4">Education</h4>
          <p className="text-gray-700 dark:text-gray-300">
            B.Sc. in Information System Management from Shanmuga Industries Arts and Science College with a 7.2 GPA.
          </p>
        </Card>
        
        <Card className="p-8 animate-on-scroll" animate>
          <h4 className="text-xl font-bold mb-4">Skills</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Proficient in Figma, Microsoft 365, HTML, CSS, Tailwind, Visual Studio Code, and various design tools.
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default About;