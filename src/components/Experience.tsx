import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div 
        ref={experienceRef}
        className="container mx-auto px-6 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in web development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="absolute top-0 left-0 sm:left-0 h-full w-2 bg-blue-200 dark:bg-blue-900 group-first:rounded-t-full group-last:rounded-b-full sm:left-16"></div>
            
            {/* Timeline circle */}
            <div className="absolute left-0 sm:left-16 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <Calendar size={20} />
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg ml-6 sm:ml-0 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-4">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">MERN Stack Intern</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">AccioJob</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>October 2024 - March 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Gurgaon, Delhi</span>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Developed and implemented RESTful APIs using Express.js & MongoDB, ensuring seamless data flow.</li>
                <li>Built responsive and interactive UIs using React.js, enhancing user experience.</li>
                <li>Utilized Node.js and npm for efficient server-side development & dependency management.</li>
                <li>Collaborated with team members on agile projects, participating in code reviews and testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;