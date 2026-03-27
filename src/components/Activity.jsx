import React, { useState } from 'react';

const Activity = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const activities = [
    {
      id: 1,
      title: 'Digital Innovation and Agentic AI in the Next Decade & Knowledge Sharing: Future skill for future work (Metro System)',
      desc: 'A special lecture and technology tour focused on preparing computer science students for the modern IT workforce. The session covered the evolution of digital innovation, the future impact of Agentic AI on the business world, and the essential skills required for future careers. The program also included a visit to the Technology Demonstration Center to experience real-world, cutting-edge IT solutions.',
      img: '/images/Agentic Ai.jpg',
    },
    {
      id: 2,
      title: 'Software Project Initiation and Cost Estimation (Indigy)',
      desc: 'A special lecture focused on the foundational steps of launching a software project for a startup. The session covered how to turn an idea into a practical plan by defining the project scope, planning a Minimum Viable Product (MVP), and accurately estimating development costs, including human resources and infrastructure.',
      img: '/images/Soft eng..jpg',
    },
    {
      id: 3,
      title: 'Business Transformation และ Business Use Case (Bytedance)',
      desc: 'An experience-sharing session focused on Business Transformation and practical Business Use Cases. The lecture explored how companies leverage digital technologies to adapt their business models, solve real-world industry challenges, and drive innovation within a startup environment.',
      img: '/images/Lark.jpg',
    },
    {
      id: 4,
      title: 'Data analytics and visualization by MS-Power BI and MS-Power Automate (Samsonite)',
      desc: 'A special lecture and hands-on workshop focused on practical data analytics. The session covered how to transform raw data into interactive, visual dashboards using MS Power BI, and how to automate data workflows and business processes using MS Power Automate.',
      img: '/images/BI.jpg',
    },
    {
      id: 5,
      title: 'Geospatial Analysis (TRUE DIGITAL GROUP CO., LTD.)',
      desc: 'A hands-on workshop and lecture focused on analyzing and visualizing location-based data. The session covered techniques for mapping geographical information to uncover spatial patterns, trends, and actionable insights.',
      img: '/images/Kni.jpg',
    },
    {
      id: 6,
      title: 'Career Guidance & Professional Readiness Event (Jobsdb)',
      desc: 'A career preparation and professional development event designed to equip students for the workforce. The session featured insights from guest speakers and industry professionals on discovering the right career path, personal branding, and smoothly transitioning from university life to the professional world.',
      img: '/images/Jobdb.jpg',
    },
    {
      id: 7,
      title: 'University Network Infrastructure',
      desc: 'Exploring connectivity beyond standard Wi-Fi. This involved analyzing system strengths and weaknesses to develop practical solutions. The experience provided a deep understanding of enterprise-level network architecture and management, building a strong foundation for a future career as an IT professional.',
      img: '/images/Network.jpg',
    },
    {
      id: 8,
      title: 'Customer Data Platform (CDP) and Power BI Workshop (Samsonite)',
      desc: 'A hands-on workshop and lecture focused on leveraging Customer Data Platforms (CDP) to centralize customer information. The session covered practical skills in using MS Power BI to analyze this data and create visual dashboards, enabling data-driven strategies for digital businesses.',
      img: '/images/Sam.jpg',
    },
    {
      id: 9,
      title: 'ERP for Digital Business Development (Metro System)',
      desc: 'A hands-on workshop and special lecture focusing on Enterprise Resource Planning (ERP) systems. The session explored how to utilize ERP software to integrate core business processes, improve operational efficiency, and drive digital transformation within an organization.',
      img: '/images/ERP.jpg',
    }
  ];

  return (
    <section id="activity" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="container mx-auto px-4 max-w-6xl">

        <h3 className="text-4xl font-black mb-16 text-center text-gray-800 dark:text-white tracking-wide">
          Activity
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map(act => (
            <div key={act.id} className="bg-blue-100 dark:bg-slate-800 flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-blue-200 dark:border-slate-700">

              <div
                className="h-56 overflow-hidden bg-blue-50 dark:bg-slate-700 relative flex items-center justify-center group cursor-pointer"
                onClick={() => setSelectedImg(act.img)}
              >
                <img src={act.img} alt={act.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                  {act.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {act.desc}
                </p>
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
              <img src={selectedImg} alt="Enlarged" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Activity;
