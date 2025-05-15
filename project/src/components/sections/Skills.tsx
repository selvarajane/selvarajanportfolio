import React, { useState, useEffect, useRef } from 'react';
import Section from '../ui/Section';
import { skills } from '../../data/skills';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
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

  const categories: { label: string; value: SkillCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Design', value: 'design' },
    { label: 'Other', value: 'other' },
  ];

  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <Section 
      id="skills" 
      title="Skills & Expertise"
      subtitle="Technologies and tools I work with"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div ref={animatedElementsRef}>
        <div className="flex flex-wrap justify-center mb-16 animate-on-scroll">
          {categories.map(category => (
            <button
              key={category.value}
              className={`px-6 py-2 m-2 rounded-full transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="flex flex-col items-center animate-on-scroll transition-all duration-500 ease-in-out"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 0.5s ease forwards'
              }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4 transition-transform duration-300 hover:scale-110">
                <skill.icon className="text-primary-500" size={36} />
              </div>
              <h3 className="text-lg font-medium text-center mb-2">{skill.name}</h3>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i < skill.level 
                        ? 'bg-primary-500' 
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;