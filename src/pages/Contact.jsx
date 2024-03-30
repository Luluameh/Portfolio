import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import lulu from "../Assests/lulu pic.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ContactForm = () => {

 const { ref, inView } = useInView({
   triggerOnce: true, // Ensures animation triggers only once
   threshold: 0.5, // Adjust this threshold based on your preference
 });


  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init("e9A-b8CooCSVbTE1N");
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_wm7s9tc", "template_48768p4", form.current).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <>
      <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Animate only when in view
          transition={{ duration: 0.5 }}
          ref={ref}
        >
      <div className="wow fadeInUp pb-5" data-wow-delay="0.1s" id="contact">
        <div className="container-fluid bg-cover bg-center flex bg-slate-300">
          <div className="h-full w-full hidden md:flex ">
            <img className="" src={lulu} alt="lulu pic" />
          </div>
          <div className="container h-auto mx-auto relative w-full bg-black">
            <div className="flex flex-wrap items-center h-full w-full">
              <div className="w-full md:w-1/2"></div>
              <div className="w-full md:w-1/2">
                <div className="contact-form w-full h-full bg-red-600 md:absolute top-0 left-0 bottom-0 right-0 p-24">
                  <div id="success"></div>
                  <form
                    name="sentMessage"
                    id="contactForm"
                    noValidate="novalidate"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="form-control w-full p-3 bg-transparent border-b border-white"
                        id="message"
                        placeholder="Message"
                        required="required"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="btn bg-white text-red-600 px-4 py-2 mt-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default ContactForm;
