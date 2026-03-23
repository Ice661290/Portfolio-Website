// ไฟล์ Hero.jsx สำหรับแสดงผลส่วนแรกสุดของเว็บไซต์เวลาเข้ามาถึง
import React from 'react';

const Hero = () => {
  return (
    // section นี้คือส่วนแรก (Header/Intro)
    // bg-white สำหรับสว่าง, bg-slate-900 สำหรับมืด
    <section id="intro" className="min-h-screen flex items-center bg-white dark:bg-slate-900 transition-colors duration-300 pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">

        {/* รูปภาพโปรไฟล์ (ฝั่งซ้ายบนมือถือ หรือฝั่งซ้ายของจอคอม) */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
          <img
            src="/images/Ice.png"
            alt="Thanatcha Nakong"
            className="relative z-10 w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-8 border-black shadow-2xl transition-transform hover:scale-105 duration-500"
          />
        </div>

        {/* ข้อมูลเบื้องต้น (ฝั่งขวาบนจอคอม) */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-bold tracking-[0.2em] uppercase mb-4">
            Hi, my name is
          </p>
          <h1 className="font-black text-gray-900 dark:text-white tracking-tighter uppercase mb-4 leading-[1.1] flex flex-col items-center md:items-start">
            <span className="text-5xl md:text-6xl lg:text-7xl">Thanatcha</span>
            <span className="flex items-baseline whitespace-nowrap md:mt-1">
              <span className="text-5xl md:text-6xl lg:text-7xl">Nakong</span>
              <span className="text-blue-600 dark:text-blue-400 text-4xl md:text-6xl lg:text-7xl ml-4">(Ice)</span>
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-semibold tracking-[0.2em] uppercase mt-2">
            Full-stack Developer
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
