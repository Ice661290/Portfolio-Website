import React, { useState } from 'react';

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    {
      id: "1",
      title: 'Canteen Queue Reservation System',
      tags: ['HTML', 'CSS', 'PHP', 'SQL', 'XAMPP'],
      desc: 'A canteen queue reservation system developed to manage and streamline the process of ordering and collecting food from the canteen.',
      img: '/images/testimonials/Canteen Queue Reservation System.png',
      link: 'https://github.com/Ice661290/Campus-Eats-Reservation-The-Kill-'
    },
    {
      id: "2",
      title: 'Wordle IT',
      tags: ['HTML', 'CSS', 'Javascript', 'JSON'],
      desc: 'An English IT vocabulary guessing game developed to practice and understand the mechanics of user interface (UI) rendering and the underlying game logic.',
      img: '/images/testimonials/2DGame.png',
      link: 'https://github.com/Ice661290/Wordle-IT'
    },
    {
      id: "3",
      title: 'Solar System Simulation',
      tags: ['Unity'],
      desc: 'A 3D Solar System simulation developed using the Unity Game Engine. The project accurately demonstrates the relative distances, orbital velocities, and rotational speeds of each planet, all based on scaled-down real-world proportions.',
      img: '/images/testimonials/3DProject.png',
      link: 'https://github.com/Ice661290/SolarSystemSimulation'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-blue-100 dark:bg-slate-800 transition-colors duration-300 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-4xl font-black mb-16 text-center text-gray-800 dark:text-white tracking-wide">
          My Project
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 flex flex-col rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-slate-700"
            >
              <div
                className="h-56 overflow-hidden relative group cursor-pointer"
                onClick={() => setSelectedImg(project.img)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <div key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold transition-colors whitespace-nowrap">
                      {tag}
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link w-fit"
                >
                  <svg className="w-5 h-5 transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-5xl w-full flex justify-center" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-12 right-0 text-white hover:text-red-400 font-bold text-4xl transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                &times;
              </button>
              <img src={selectedImg} alt="Enlarged Project" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white dark:bg-slate-800 p-2" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
