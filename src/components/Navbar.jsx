import React, { useState } from 'react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  // สถานะเปิด/ปิดเมนูบนหน้าจอมือถือ
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 border-b dark:border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* โลโก้ */}
        <a href="#" className="text-2xl font-black tracking-tighter hover:opacity-80 transition">
          <span className="text-blue-600 dark:text-blue-400">Port</span>
          <span className="text-gray-800 dark:text-gray-200">folio</span>
        </a>
        
        {/* เมนูสำหรับหน้าจอคอมพิวเตอร์ (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium text-sm xl:text-base items-center">
            <li><a href="#intro" className="hover:text-blue-500 transition-colors">About Me</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">My Project</a></li>
            <li><a href="#activity" className="hover:text-blue-500 transition-colors">Activity</a></li>
            <li><a href="#certificates" className="hover:text-blue-500 transition-colors">Certificates</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
          </ul>

          {/* ปุ่มสลับธีมพร้อมขอบสีฟ้า (ย้ายสไตล์มาจากปุ่ม Contact เดิม) แทนที่ด้วย SVG ไอคอน */}
          <button 
            onClick={toggleDarkMode} 
            className="flex items-center justify-center w-10 h-10 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900 rounded-full transition-colors"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              // ไอคอนพระจันทร์ (Moon)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
               // ไอคอนพระอาทิตย์ (Sun)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* ส่วนปุ่มกดสำหรับหน้าจอมือถือ (Mobile) */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* ปุ่ม Theme สำหรับมือถือ */}
          <button 
            onClick={toggleDarkMode} 
            className="flex items-center justify-center w-10 h-10 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900 rounded-full transition-colors"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>
          
          {/* ปุ่ม Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* เมนู Dropdown สำหรับหน้าจอมือถือแบบย่อ */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-md">
          <ul className="flex flex-col text-center divide-y divide-gray-100 dark:divide-slate-800 text-gray-700 dark:text-gray-300 font-medium text-lg">
            <li><a href="#intro" onClick={() => setIsOpen(false)} className="block py-4 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">About Me</a></li>
            <li><a href="#testimonials" onClick={() => setIsOpen(false)} className="block py-4 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">My Project</a></li>
            <li><a href="#activity" onClick={() => setIsOpen(false)} className="block py-4 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">Activity</a></li>
            <li><a href="#certificates" onClick={() => setIsOpen(false)} className="block py-4 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">Certificates</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-4 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
