import React, { useEffect, useRef } from 'react';
import { User, MapPin, Calendar, Languages } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div 
        ref={aboutRef}
        className="container mx-auto px-6 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a Frontend Web Developer with a passion for creating beautiful, 
              functional, and user-centered digital experiences. With a background in IT and 
              continuing education in MCA, I bring a blend of technical knowledge and 
              creative problem-solving to every project.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm experienced in developing responsive websites and web applications using 
              modern technologies like React.js, TypeScript, and Tailwind CSS. I enjoy 
              working on projects that challenge me to learn new skills and push my boundaries.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, I explore new web development trends and engage in 
              artistic pursuits that fuel my creativity and design thinking.
            </p>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Personal Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Full Name</h4>
                  <p className="font-medium">Pragya Rai</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Birth Date</h4>
                  <p className="font-medium">January 14, 1999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="font-medium">India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Languages size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Languages</h4>
                  <p className="font-medium">English, Hindi, Marathi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;