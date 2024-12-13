import React from 'react';

const Footer = () => {
  return (
    <div className='w-screen'>
      <div className="w-[80%] mx-auto mx-auto mb-6 h-[180px] flex justify-center items-center flex-col bg-[#0B0B0B] text-white rounded-[5px] opacity-95">
        <img
          src="/assets/images/whitelogo.png"
          alt="logo Baltasar white"
          className="w-[180px] md:w-[300px]"
        />
        <div style={{ textAlign: 'center' }}>
          <p>contact@baltasar.paris</p>
          <p>57, rue de Turbigo, Paris III</p>
        </div>
        {/* Section du lien LinkedIn */}
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/company/baltasarparis/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732s.784-1.732 1.75-1.732 1.75.804 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.5c0-1.216-.986-2.205-2.2-2.205s-2.2.989-2.2 2.205v5.5h-3v-10h3v1.531c.664-.973 2.002-1.531 3.2-1.531 2.208 0 4 1.792 4 4v6z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
