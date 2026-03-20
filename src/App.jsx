import React, { useState, useEffect } from 'react';

// นำเข้า Components อัปเดตใหม่
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Activity from './components/Activity';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // กำหนดคลาส 'dark' ที่แท็ก <html> เมื่อเปิดโหมดมืด
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    // สีสลับไปมาตามเซคชัน และรองรับโหมดมืด
    <div className="font-sans antialiased text-gray-900 bg-white dark:bg-slate-900 dark:text-gray-100 min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <Projects />
        <Activity />
        <Certificates />
      </main>

      <Contact />
    </div>
  );
}

export default App;
