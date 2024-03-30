import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import lulu from "../Assests/lulu pic.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState(null);

  const form = useRef();

  useEffect(() => {
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

    if (!formState.message.trim()) {
      setMessageStatus("Please enter a message.");
      return;
    }

    emailjs.sendForm("service_wm7s9tc", "template_48768p4", form.current).then(
      () => {
        console.log("SUCCESS!");
        setMessageStatus(
          "Message sent successfully. We will respond as soon as possible."
        );
        // Clear input fields
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        console.log("FAILED...", error.text);
        setMessageStatus("Failed to send message. Please try again later.");
      }
    );
  };

  const closeModal = () => {
    setMessageStatus(null);
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className="wow fadeInUp pb-5" data-wow-delay="0.1s" id="contact">
          <div className="container-fluid bg-cover bg-center flex bg-white text-white">
            <div className="h-full w-full hidden md:flex ">
              <img className="" src={lulu} alt="lulu pic" />
            </div>
            <div className="container h-auto mx-auto relative w-full bg-black">
              <div className="flex flex-wrap items-center h-full w-full">
                <div className="w-full md:w-1/2"></div>
                <div className="w-full md:w-1/2">
                  <div className="contact-form w-full h-full bg-red-600 md:absolute top-0 left-0 bottom-0 right-0 p-24 text-white">
                    <div id="success"></div>
                    <form
                      name="sentMessage"
                      className="text-white"
                      id="contactForm"
                      noValidate="novalidate"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <div className="mb-4">
                        <input
                          type="text"
                          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-white"
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
                          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-white"
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
                          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-white"
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
                          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-white"
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
      <AnimatePresence>
        {messageStatus && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-0 right-0 mb-8 mr-8 bg-white text-black p-4 rounded shadow-lg"
            key="message-status"
          >
            <p>{messageStatus}</p>
            <button className="ml-2 text-red-600" onClick={closeModal}>
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
