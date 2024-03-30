import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleServiceClick = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleExprienceClick = () => {
    const exprienceSection = document.getElementById("exprience");
    if (exprienceSection) {
      exprienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleReviewClick = () => {
    const reviewSection = document.getElementById("review");
    if (reviewSection) {
      reviewSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Event listener for scroll
  useEffect(() => {
    const checkScroll = () => {
      // Only change the isScrolled state if the mobile menu is not open
      if (!isOpen) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isOpen]);
  return (
    <nav
      className={`bg-${isScrolled ? "white" : "red-600"}
       fixed w-full z-20 border-b-2 border-dotted border-white transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-10 h-16">
          <div className="flex items-center space-x-4 ml-5 ">
            <Link
              to="/"
              className={`text-${
                isScrolled ? "red-600" : "white"
              } font-bold transition-colors duration-300 `}
            >
              Your Logo
            </Link>
          </div>
          <div className="hidden md:block    ">
            <div className="flex items-center space-x-4 ">
              <button
                onClick={handleHomeClick}
                className={`text-${isScrolled ? "black" : "white"} hover:${
                  isScrolled ? "text-red-600" : "text-black"
                } text-sm font-medium transition-colors duration-300`}
              >
                Home
              </button>
              <button
                onClick={handleAboutClick}
                className={`text-${isScrolled ? "black" : "white"} hover:${
                  isScrolled ? "text-red-600" : "text-black"
                }  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                About
              </button>
              <button
                onClick={handleServiceClick}
                className={`text-${isScrolled ? "black" : "white"}  hover:${
                  isScrolled ? "text-red-600" : "text-black"
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Service
              </button>
              <button
                onClick={handleExprienceClick}
                className={`text-${isScrolled ? "black" : "white"} hover:${
                  isScrolled ? "text-red-600" : "text-black"
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Portfolio
              </button>

              <button
                onClick={handlePortfolioClick}
                className={`text-${isScrolled ? "black" : "white"} hover:${
                  isScrolled ? "text-red-600" : "text-black"
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Exprience
              </button>

              <button
                onClick={handleContactClick}
                className={`text-${isScrolled ? "black" : "white"} hover:${
                  isScrolled ? "text-red-600" : "text-black"
                } active:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Contact
              </button>
              <button
                onClick={handleReviewClick}
                className={`text-${isScrolled ? "black" : "white"} hover:${
                  isScrolled ? "text-red-600" : "text-black"
                } active:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Review
              </button>
            </div>
          </div>
          {/** here the handbugger */}
          <div className="-mr-0 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col px-2 pt-2 pb-3 sm:px-3">
            <button>
              <Link
                to="/"
                className="text-gray-500 block hover:text-black px-3 py-2  text-base font-medium"
              >
                Home
              </Link>
            </button>
            <button
              onClick={handleAboutClick}
              className="text-gray-500 block hover:text-black px-3 py-2 text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={handleServiceClick}
              className="text-gray-500 block hover:text-black px-3 py-2 text-sm font-medium"
            >
              Service
            </button>
            <button
              onClick={handleExprienceClick}
              className="text- text-gray-500 block hover:text-black px-3 py-2  text-sm font-medium"
            >
              Exprience
            </button>
            <button
              onClick={handlePortfolioClick}
              className="text-gray-500 block hover:text-black px-3 py-2 text-sm font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={handleContactClick}
              className="text-gray-500 block hover:text-black px-3 py-2 text-sm font-medium"
            >
              Contact
            </button>

            <button
              onClick={handleReviewClick}
              className="text-gray-500 block hover:text-black px-3 py-2 text-sm font-medium"
            >
              Review
            </button>
            {/* Add more links as needed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
