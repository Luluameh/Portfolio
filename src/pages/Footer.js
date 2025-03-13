import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer wow fadeIn relative pt-4" data-wow-delay="0.3s">
      <div className="container-fluid absolute right-0 left-0 bg-red-600 p-8 md:p-16 flex flex-col justify-between h-auto">
        <div className="container mx-auto">
          <div className="footer-info text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ameh Lucy Ajumi
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-white mb-6">
              Front-End Developer
            </h3>
            
            <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0">
              <div className="flex items-center text-white mx-2">
                <FaMapMarkerAlt className="mr-2" />
                <p className="text-lg font-normal">Lagos, Nigeria</p>
              </div>
              <div className="hidden md:block w-px h-6 bg-white mx-4"></div>
              <div className="flex items-center text-white mx-2">
                <FaPhone className="mr-2" />
                <p className="text-lg font-normal">+234 08029496750</p>
              </div>
              <div className="hidden md:block w-px h-6 bg-white mx-4"></div>
              <div className="flex items-center text-white mx-2">
                <FaEnvelope className="mr-2" />
                <p className="text-lg font-normal">amehajumi3@gmail.com</p>
              </div>
            </div>
            
            <div className="footer-social mt-6 flex justify-center">
              <a href="https://twitter.com/lulugreg_4" target="_blank" rel="noopener noreferrer" className="text-white mx-3 hover:text-gray-200 transition-colors duration-300 text-2xl">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/in/amehlucyajumi" target="_blank" rel="noopener noreferrer" className="text-white mx-3 hover:text-gray-200 transition-colors duration-300 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/luluameh" target="_blank" rel="noopener noreferrer" className="text-white mx-3 hover:text-gray-200 transition-colors duration-300 text-2xl">
                <FaGithub />
              </a>
              <a href="mailto:amehajumi3@gmail.com" className="text-white mx-3 hover:text-gray-200 transition-colors duration-300 text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto mt-8 pt-6 border-t border-red-400">
          <p className="text-center text-white">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold">Lucy Ajumi Ameh</span>
            {" "}- All Rights Reserved | Front-End Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;