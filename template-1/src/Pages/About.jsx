import React from "react";
import { motion } from "framer-motion";
import expertise from "../assets/helper/expertis";
import linkedin from "../assets/linkedin.jpg";
import "../index.css";

const About = () => {
  const loopedExpertise = [...expertise, ...expertise];

  return (
    <div id="about" className="flex flex-col gap-10 items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
      <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="sm:text-7xl sm:p-0 p-5 text-5xl text-white font-bold tracking-wide">Who We Are</motion.p>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: "easeOut" }} className="cursor-pointer relative flex flex-col gap-5 sm:p-7 p-4 sm:mx-0 mx-3 rounded-3xl bg-opacity-30 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg max-w-lg">
          <span className="text-4xl text-orange-500 font-bold text-center">Mission</span>
          <p className="text-white text-lg text-center leading-relaxed">Our mission is to provide world-class IT services that empower businesses to achieve digital excellence. We strive to innovate, automate, and optimize technology to create seamless solutions for our clients.</p>
          <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-orange-900 to-yellow-500 opacity-25"></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} className="cursor-pointer relative flex flex-col gap-5 sm:p-7 p-4 sm:mx-0 mx-3 rounded-3xl bg-opacity-30 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg max-w-lg">
          <span className="text-4xl text-orange-500 font-bold text-center">Vision</span>
          <p className="text-white text-lg text-center leading-relaxed">To be a global leader in IT services, pioneering innovation in cloud computing, cybersecurity, AI, and web development while delivering unparalleled customer satisfaction.</p>
          <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-orange-900 to-yellow-500 opacity-25"></div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-4xl text-white font-semibold text-center">Our Expertise</p>
        <p className="sm:text-2xl text-lg sm:p-0 p-3 text-white text-center sm:w-[1000px] w-96"> Our team comprises <span className="text-blue-400 font-semibold">seasoned IT professionals</span> who have worked in <span className="text-blue-400 font-semibold">top-tier organizations</span> worldwide, bringing over <span className="text-blue-400 font-semibold">10+ years of experience</span> in cutting-edge technologies. From cloud computing to AI, cybersecurity, and full-stack development, our experts have helped build and scale businesses across industries.</p>
      </div>
      <div className="overflow-hidden w-full">
        <div className="flex gap-5" style={{ animation: "scroll 60s linear infinite", width: `${loopedExpertise.length * 30}rem`,}}>
          {
            loopedExpertise.map((item, index) => (
              <div className="bg-gradient-to-t from-gray-900 to-gray-500 rounded-lg sm:w-96 w-80 sm:p-5 p-3 gap-5 shadow-x" key={index}>
                <p className="text-white sm:text-lg text-[14px]">{item.about}</p>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-3 my-10">
                    <img src={item.imageURL} className="w-28 rounded-2xl" alt="" />
                    <p className="text-white text-center text-xl">{item.name}</p>
                  </div>
                  <div className="flex flex-col gap-1 my-10 justify-center items-center">
                    <p className="text-white text-center text-lg">{item.designation}</p>
                    <p className="text-white text-center text-lg">Experience : {item.experience}</p>
                    <a href="https://www.linkedin.com/in/nandit-sharma-9a0174203/" target="_blank"><img src={linkedin} alt="" className="w-14 rounded-3xl my-5 shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]"/></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
