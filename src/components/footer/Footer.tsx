// Footer.js

import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-40">
      <div className="container mx-auto px-4">
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center">
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <FaGithub size={32} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <FaLinkedin size={32} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <FaFacebook size={32} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <FaDiscord size={32} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Shahariar Kobir Shakil. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
