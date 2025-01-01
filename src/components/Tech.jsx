import React, { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills">
      {/* Title Section */}
      <motion.div className={styles.motionDivContainer} variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} text-center text-secondary`}>Technical Skill Set.</h2>
      <p className="text-center mt-2 text-secondary text-[17px] max-w-3xl mx-auto">
          I have developed a diverse set of skills across multiple areas of technology, including software development, IoT,
          machine learning, data analysis, and design. Committed to continuously learning new technologies to stay ahead in the fast-evolving tech world.
          <br />
          Hover over the icons to explore the details!
      </p>
      </motion.div>
      

      {/* Skill Icons */}
      <div className="relative flex flex-row flex-wrap justify-center gap-8 mt-6">
        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            className="w-28 h-28 relative group"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <BallCanvas icon={technology.icon} />

            {/* Hover Popup Card */}
            {hoveredSkill === index && (
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-lg shadow-lg w-40 z-10">
                <h3 className="text-center font-bold text-gray-800">{technology.name}</h3>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#915EFF] h-2.5 rounded-full"
                      style={{ width: `${technology.rating * 20}%` }} // rating to percentage
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");