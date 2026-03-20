import React, { useState } from 'react';

const Certificates = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certs = [
    {
      id: 1,
      tag: 'By SET',
      title: 'Business Model Canvas',
      img: '/images/BMC.jpg',
    },
    {
      id: 2,
      tag: 'By SET',
      title: 'Pitching Technique',
      img: '/images/Pitching_Technique.jpg',
    },
    {
      id: 3,
      tag: 'By FutureSkills',
      title: 'พื้นฐานการสร้างเกมด้วย AI ฉบับเข้าใจง่าย',
      img: '/images/AI_Game.jpg',
    },
    {
      id: 4,
      tag: 'By NIA',
      title: 'โครงการ STARTUP THAILAND LEAGUE 2025 ครั้งที่ 9',
      img: '/images/Startup.jpg',
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-blue-100 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">

        <h3 className="text-4xl font-black mb-16 text-center text-gray-800 dark:text-white tracking-wide">
          Certificates
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certs.map(cert => (
            <div key={cert.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 p-2">

              <div 
                className="h-48 bg-gray-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center p-4 relative mb-4 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImg(cert.img)}
              >
                <img src={cert.img} alt={cert.title} loading="lazy" className="w-full h-full object-contain absolute transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="px-4 pb-6 flex flex-col items-start flex-1">
                <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-3">
                  {cert.tag}
                </div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  {cert.title}
                </h4>
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
              <img src={selectedImg} alt="Enlarged Certificate" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white dark:bg-slate-800 p-2" />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;
