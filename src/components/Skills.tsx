import React, { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  category: 'frontend' | 'tools';
};

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const frontendSkills: Skill[] = [
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'React.js', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Bootstrap', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' }
  ];
  
  const toolSkills: Skill[] = [
    { name: 'Git & GitHub', category: 'tools' },
    { name: 'VS Code', category: 'tools' },
    { name: 'Responsive Design', category: 'tools' },
    { name: 'Problem Solving', category: 'tools' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const renderSkillsSection = (skills: Skill[], title: string) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-200"
          >
            <span className="font-medium text-blue-700 dark:text-blue-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div 
        ref={skillsRef}
        className="container mx-auto px-6 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey as a developer. Here's a look at my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            {renderSkillsSection(frontendSkills, 'Frontend Development')}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            {renderSkillsSection(toolSkills, 'Tools & Soft Skills')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;