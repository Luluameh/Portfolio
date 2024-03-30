import React from "react";
import lulu from "../Assests/lu.png";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import About from "./About";
const Home = () => {
  const [text, setText] = useState("");
  const textList = [
    "Web Designer",
    "Web Developer",
    "Front End Developer",
    "Apps Designer",
    "Apps Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentText = textList[index];
      const currentLength = text.length;
      const maxLength = currentText.length;

      if (currentLength < maxLength) {
        setText(currentText.substring(0, currentLength + 1));
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setText("");
          setIndex((prevIndex) =>
            prevIndex === textList.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000); // Change the delay between words (in milliseconds) as needed
      }
    }, 100); // Change the delay between letters (in milliseconds) as needed

    return () => clearInterval(timer);
  }, [index, text, textList]);
  return (
    <>
      <Navbar />
      <div className=" md:px-20 bg-gradient-to-b from-red-600 to-red-700 md:min-h-screen">
        <div className="container mx-auto">
          <div className="md:flex items-center ">
            <div className="md:w-1/2 md:text-left text-center">
              <div className="hero-content px-0 md:px-8 py-8 md:py-0">
                <div className="hero-text p-12 md:p-0">
                  <p className="text-lg text-white font-semibold">I'm</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Ameh Lucy Ajumi
                  </h1>
                  <h2 className="text-md md:text-2xl text-white font-semibold mb-4 pb-4 ">
                    {text}
                  </h2>
                </div>
                <div className="hero-btn">
                  <div className="hero-btn">
                    <a
                      href="/"
                      className="btn bg-white text-red-600 mr-4 px-6 py-2 md:px-8 md:py-3 font-semibold rounded-full shadow-lg hover:bg-transparent hover:text-white hover:border-white transition duration-300 ease-in-out sm:text-sm"
                    >
                      Hire Me
                    </a>
                    <a
                      href="/contact"
                      className="btn bg-transparent border border-white text-white px-6 py-2 md:px-8 md:py-3 font-semibold rounded-full shadow-lg hover:bg-white hover:text-red-600 transition duration-300 ease-in-out sm:text-sm"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center  md:flex items-center pl-[5%] hidden h-screen">
              <div className="">
                <img
                  src={lulu}
                  alt=""
                  className="max-w-100 max-h-100 rounded-full p-5 bg-red-300 flex items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**the about side */}
      <div id="about">
        <About />
      </div>
    </>
  );
};

export default Home;
