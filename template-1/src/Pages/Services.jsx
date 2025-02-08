import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../assets/helper/services.js";

const Services = () => {
  const [referenceID, setReferenceID] = useState(null);

  const findTechnologies = services.find((item) => item._id === referenceID);

  return (
    <div id="services" className="flex flex-col items-center justify-center sm:h-[900px] h-auto bg-gradient-to-b from-gray-900 to-gray-800 p-5 relative">
      <div className="flex flex-col gap-5 text-center">
        <p className="sm:text-6xl text-4xl sm:p-0 p-3 font-semibold text-white">Services we offer</p>
        <p className="text-xl text-white text-center sm:w-[900px] w-80">We provide a range of IT services designed to help businesses succeed in the digital world. From web and app development to cybersecurity and cloud solutions, our team ensures top-notch quality.</p>
      </div>
      <div className="flex flex-col gap-5 my-10 mb-48 sm:flex-row">

        {
          services.map((item) => (
            <div key={item._id} className={`flex flex-col gap-8 bg-gradient-to-b from-slate-800 to-slate-400 ${referenceID === item._id ? "h-auto" : "h-80"} rounded-2xl w-80 p-7 cursor-pointer`} onMouseEnter={() => setReferenceID(item._id)} onMouseLeave={() => setReferenceID(null)}>
              <p className="text-white text-3xl font-semibold">{item.title}</p>
              <p className="text-white text-lg">{referenceID === item._id ? item.subtitle : `${item.subtitle.slice(0, 200)}...`}</p>
            </div>
          ))
        }
      </div>
      <AnimatePresence>
        {
          findTechnologies?.technologies && (
            <motion.div className="sm:flex hidden gap-5 justify-center absolute bottom-20" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              {
                findTechnologies.technologies.map((techImage, index) => (
                  <motion.div key={index} className="bg-gradient-to-b from-slate-500 to-slate-950 p-2 rounded-2xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <img src={techImage} alt={`technology-${index}`} className="w-24 h-24 object-contain rounded-2xl"/>
                  </motion.div>
                ))
              }
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default Services;
