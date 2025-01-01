import { motion } from "framer-motion";
import { styles } from "../styles";
import adrianImage from "../assets/luren.jpg"; // Import the image
import { FaDownload } from "react-icons/fa"; // Import the download icon


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`} // Adjusted top value
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          {/* Left: Text Section */}
          <div className="sm:w-3/4">
            <h1 className={`${styles.heroHeadText} text-white flex flex-col`}>
              <span>Hello, I'm <span className="text-[#7b50d9]"> Lauren Christy</span>
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-secondary max-w-3xl`} style={{ fontSize: '17px' }}>
            Thank you for visiting my portfolio! I’m a Computer Engineering undergraduate at University 
            of Indonesia, and I’m excited by the opportunities technology offers. I enjoy tackling challenges 
            with curiosity and a focus on personal growth, always working to improve my skills and create solutions 
            that can make a positive impact.
            </p>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a
                href="/path-to-your-resume.pdf" // Replace with the actual path to your resume
                download
              >
                <button
                  type="button"
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center gap-2"
                >
                  <FaDownload size={20} />
                  Download my Resume
                </button>
              </a>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="sm:w-1/3 mt-5 sm:mt-0 sm:ml-auto flex justify-end">
            <motion.img
              src={adrianImage} // Use the imported image
              alt="Lauren"
              className="w-3/3 h-3/3 rounded-full ml-5" 
              animate={{
                y: [0, -10, 0], // Move up, then down
              }}
              transition={{
                duration: 2, // Duration of the animation
                repeat: Infinity, // Infinite loop
                repeatType: "loop", // Smooth looping
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
