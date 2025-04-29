import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const education = [
    {
      degree: "MCA",
      institution: "Parul University, PIET",
      years: "2023 - 2025",
      score: "CGPA: 8.01/10"
    },
    {
      degree: "BSC(IT)",
      institution: "BNN college of Science, Arts and Commerce",
      location: "Thane",
      years: "2016 - 2019",
      score: "CGPA: 7.25/10"
    },
    {
      degree: "12th Grade (ICSCE)",
      institution: "Ratnakar North Point School",
      location: "Howrah",
      years: "2016",
      score: "60.83%"
    },
    {
      degree: "10th Grade (State Board)",
      institution: "S.S Sangh English Medium School",
      location: "Bhiwandi",
      years: "2014",
      score: "68.40%"
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Development – PHP & MySQL",
      issuer: "AccioJob"
    },
    {
      name: "Java Servlet Basics & JSP 101",
      issuer: "Oracle Academy"
    },
    {
      name: "Computer Networks & Internet Protocol",
      issuer: "NPTEL",
      score: "70%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div 
        ref={educationRef}
        className="container mx-auto px-6 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-3xl font-bold mb-2">Education</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto lg:mx-0 rounded"></div>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <GraduationCap size={24} />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.degree}</h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{item.institution}</p>
                      {item.location && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.location}</p>
                      )}
                      <div className="mt-3">
                        <div className="text-sm text-gray-500 dark:text-gray-400">{item.years}</div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.score}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-3xl font-bold mb-2">Certifications</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto lg:mx-0 rounded"></div>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Award size={24} />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{cert.name}</h3>
                      <p className="text-gray-700 dark:text-gray-300">Issued by: {cert.issuer}</p>
                      {cert.score && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Score: {cert.score}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-10">
                <div className="text-center lg:text-left mb-6">
                  <h3 className="text-2xl font-bold mb-2">Personal Interests</h3>
                  <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 rounded"></div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>Artistic Pursuits</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>Learning new technologies & web development trends</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>UI/UX Design</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>Reading technical blogs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;