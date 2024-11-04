import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gradient-to-r from-orange-700 via-black to-orange-900">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Description */}
        <div>
          <h3 className="mb-2 font-bold lg:text-xl sm:text-[20px]">À propos</h3>
          <p className='lg:text-[15px] sm:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.</p>
        </div>
        {/* Liens de destination */}
        <div>
          <h3 className="mb-2 lg:text-xl sm:text-[20px] font-bold">Liens de destination</h3>
          <ul>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">Features</a></li>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">Workflow</a></li>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Liens compatibles pour un projet */}
        <div>
          <h3 className="mb-2 lg:text-xl sm:text-[20px] font-bold">Liens compatibles</h3>
          <ul>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">Documentation</a></li>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">API</a></li>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">GitHub</a></li>
            <li className="mb-1 lg:text-[15px] sm:text-[12px]"><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>
        {/* Icônes des réseaux sociaux */}
        <div>
          <h3 className="mb-2 lg:text-xl sm:text-[20px] font-bold">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
