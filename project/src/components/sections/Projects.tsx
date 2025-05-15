import React, { useState, useEffect, useRef } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { projects } from '../../data/projects';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const animatedElementsRef = useRef<HTMLDivElement>(null);

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

  // Get unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects by selected tag
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <Section 
      id="projects" 
      title="My Projects"
      subtitle="Selected works I've created"
    >
      <div ref={animatedElementsRef}>
        <div className="flex flex-wrap justify-center mb-16 animate-on-scroll">
          <button
            className={`px-5 py-2 m-2 rounded-full transition-all duration-200 ${
              selectedTag === null
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-5 py-2 m-2 rounded-full transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="animate-on-scroll overflow-hidden transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{ animationDelay: `${index * 0.05}s` }}
              animate
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                      aria-label="View source code on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;