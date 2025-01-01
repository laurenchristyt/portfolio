import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description, isExpanded, onClick }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer"
        onClick={onClick}
      >
        <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        {/* Arrow for expandable card */}
        {!isExpanded && (
          <motion.div
            className="mt-2 text-white text-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        )}

        {/* Show description with transition when expanded */}
        <motion.div
          className="mt-2 text-white text-[13px] text-center w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isExpanded && <p>{description}</p>}
        </motion.div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // State to track which card is expanded
  const [expandedService, setExpandedService] = useState(null);

  const handleClick = (serviceTitle) => {
    // Toggle expansion: If the clicked service is already expanded, collapse it, else expand it
    setExpandedService(expandedService === serviceTitle ? null : serviceTitle);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As an undergraduate of Computer Engineering from University of Indonesia, 
        I’m passionate about exploring the ever-evolving world of technology. 
        Driven by my curiosity and growth mindset, I always thrive on developing 
        my skills, solving complex problems, and using my knowledge and opportunity 
        to create meaningful solutions that help others. <br /> These are my current interests:
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            isExpanded={expandedService === service.title}  // Check if the current service is expanded
            onClick={() => handleClick(service.title)}  // Handle click to toggle expansion
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
