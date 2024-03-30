import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer wow fadeIn relative pt-4 " data-wow-delay="0.3s">
      <div className="container-fluid absolute right-0 left-0  bg-red-600 p-16 flex flex-col justify-between h-auto  ">
        <div className="container mx-auto">
          <div className="footer-info text-center">
            <h2 className="text-4xl font-bold text-white mb-5">
              Ameh Lucy Ajumi
            </h2>

            <h3 className="text-2xl font-semibold text-white mb-6">
              123 Street, New York, USA
            </h3>
            <div className="footer-menu flex justify-center">
              <p className="text-xl font-semibold text-white mx-2">
                +234 08029496750
              </p>
              <p className="w-px h-6 bg-white mb-6"></p>

              <p className="text-xl font-semibold text-white mx-2">
                info@example.com
              </p>
            </div>
            <div className="footer-social mt-6 flex justify-center">
              <a href="/" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="/" className="text-white mx-2">
                <FaFacebook />
              </a>
              <a href="/" className="text-white mx-2">
                <FaYoutube />
              </a>
              <a href="/" className="text-white mx-2">
                <FaInstagram />
              </a>
              <a href="/" className="text-white mx-2">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <p className="text-center text-white">
            &copy;{" "}
            <a href="/" className="text-white font-semibold">
              Lucy Ajumi
            </a>
            , All Right Reserved | Designed By
            <a href="/" className="text-white font-semibold">
              Lulu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
