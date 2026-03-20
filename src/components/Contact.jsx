// ไฟล์ Contact.jsx สำหรับแสดงข้อมูลติดต่อส่วนท้าย (Footer)
import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-gray-300 py-10 relative border-t-[1px] border-gray-800 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-1">Contract</h3>
            
            <div className="flex items-center gap-4 hover:text-white transition-colors group">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="text-base font-medium">086-358-3227</span>
            </div>
            
            <div className="flex items-center gap-4 hover:text-white transition-colors group">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href="mailto:thanatcha22547@gmail.com" className="hover:underline text-base font-medium">thanatcha22547@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-4 hover:text-white transition-colors group">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              <a href="https://github.com/Ice661290" target="_blank" rel="noopener noreferrer" className="hover:underline text-base font-medium">https://github.com/Ice661290</a>
            </div>
          </div>

          {/* Right Side: Built With */}
          <div className="flex flex-col md:items-end space-y-5">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-1">Build with</h3>
            <div className="flex items-center gap-5">
              {/* React */}
              <svg className="w-8 h-8 text-[#61DAFB] hover:scale-110 transition-transform cursor-pointer" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                <circle cx="0" cy="0" r="2.05"/>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              
              {/* Tailwind */}
              <svg className="w-8 h-8 text-[#38B2AC] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-8.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C7.937 13.382 6.576 12 3.601 12z"/>
              </svg>

              {/* HTML5 */}
              <svg className="w-8 h-8 text-[#E34F26] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.169H5.41l.229 2.572h11.231l-.234 2.718H5.857l.216 2.571h8.653l-.367 4.128-2.383.639-2.388-.639-.153-1.744H7.07l.248 3.518 4.653 1.286 4.66-1.286.643-7.23H9.423l-.105-1.285h9.458l.814-9.248z"/>
              </svg>

              {/* CSS3 */}
              <svg className="w-8 h-8 text-[#1572B6] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 0h-20l1.8 21.4 8.2 2.6 8.2-2.6 1.8-21.4zm-10 21.6l-6.2-2-1.3-15h15l-1.3 15-6.2 2zm6.2-12.8h-10.7l-.3-3.1h11.4l-.4 3.1zm-10.4 2.7l.3 3.6h9.1l-.3 3.5-4.8 1.4-4.8-1.5-.2-2.6h3.1l.1 1 1.8.6 1.8-.5.1-1.6-6.6-.1v-3.8h7.4l-.1-1h-6.8l.3 1.4z"/>
              </svg>

              {/* JS */}
              <svg className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="#F7DF1E">
                <path d="M0 0h24v24H0V0z" fill="#F7DF1E"/>
                <path d="M11.97 19.34c-.69-.47-1.12-1.25-1.25-2.22h1.69c.07.49.29.9.84.9.47 0 .86-.29.86-.77 0-.58-.59-.8-1.39-1.12-1.18-.45-2.23-1.07-2.23-2.58 0-1.42 1.15-2.5 2.76-2.5 1.5 0 2.45.92 2.65 2.15h-1.68c-.09-.54-.42-.8-.94-.8-.49 0-.82.25-.82.72 0 .54.51.78 1.41 1.12 1.25.47 2.21 1.11 2.21 2.62 0 1.53-1.16 2.53-2.82 2.53-1.57 0-2.67-1-2.79-2.5zm-5.69 0c-.57-.42-.92-1.14-.99-2h1.66c.05.4.22.72.63.72.39 0 .61-.26.61-.83v-5.66h1.74v5.8c0 1.63-.82 2.78-2.26 2.78-1.22 0-2.06-.72-2.39-2.81z" fill="black"/>
              </svg>
            </div>
          </div>

        </div>

        {/* Faint Line and Copyright */}
        <div className="mt-10 border-t border-gray-800">
          <p className="mt-6 text-sm text-gray-500 text-left tracking-wider">© 2026 Thanatcha Nakong</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Contact;
