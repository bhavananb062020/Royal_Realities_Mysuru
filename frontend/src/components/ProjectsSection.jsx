import React from 'react';
import { projects } from '../data/mockData';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const ProjectsSection = () => {
  const handleExplore = (projectName) => {
    alert(`Exploring ${projectName}. Full project details will be available soon!`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR PROJECTS</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white w-full">
                    <p className="text-sm mb-1">ROYAL REALITIES</p>
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.tagline}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button
                  onClick={() => handleExplore(project.name)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                >
                  EXPLORE
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => alert('View all projects page coming soon!')}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3"
          >
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;