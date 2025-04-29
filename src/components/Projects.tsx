import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  demoLink?: string;
  codeLink?: string;
};

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  
  const projects: Project[] = [
    {
      title: "Food Ordering Website",
      description: "A fully responsive food ordering system with cart and payment integration. Users can browse menus, add items to cart, and complete secure payments.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Firebase"],
      features: [
        "Responsive design for all devices",
        "Cart functionality with state management",
        "Secure payment processing",
        "User authentication",
        "Firebase Firestore for data management"
      ],
      demoLink: "#",
      codeLink: "https://github.com/PragyaRai417"
    },
    {
      title: "University Website",
      description: "A comprehensive information portal for university students to stay updated with college activities, access course materials, and view important announcements.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Responsive layout for mobile and desktop",
        "Interactive campus map",
        "Event calendar",
        "Course catalog",
        "Student resources section"
      ],
      demoLink: "https://campus-crafter.netlify.app/",
      codeLink: "https://github.com/PragyaRai417"
    },
    {
      title: "Peachy Petal",
      description: "An online shopping experience for a cosmetic brand with secure authentication and payment gateway integration. Features product browsing, reviews, and order tracking.",
      image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "MySQL"],
      features: [
        "User account management",
        "Product catalog with filtering",
        "Shopping cart and checkout process",
        "Order history and tracking",
        "Product reviews and ratings"
      ],
      demoLink: "https://github.com/PragyaRai417",
      codeLink: "https://github.com/PragyaRai417"
    }
  ];
  
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div 
        ref={projectsRef}
        className="container mx-auto px-6 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <div className="h-64 lg:h-full w-full relative bg-gray-800">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {projects.map((_, index) => (
                        <button 
                          key={index}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === activeProject 
                              ? 'bg-blue-600' 
                              : 'bg-gray-400 hover:bg-gray-300'
                          }`}
                          onClick={() => setActiveProject(index)}
                          aria-label={`View project ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {projects[activeProject].title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {projects[activeProject].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  {projects[activeProject].demoLink && (
                    <a 
                      href={projects[activeProject].demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  
                  {projects[activeProject].codeLink && (
                    <a 
                      href={projects[activeProject].codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    >
                      <Code size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevProject}
            className="absolute top-1/2 -translate-y-1/2 -left-5 lg:-left-8 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 z-10"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute top-1/2 -translate-y-1/2 -right-5 lg:-right-8 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 z-10"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;