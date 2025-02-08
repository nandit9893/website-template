import React, { useState } from "react";
import ai_chat from "../assets/aichat.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  const [activeChat, setActiveChat] = useState(false);

  return (
    <div id="home" className="flex flex-col items-center justify-center sm:p-0 p-5 mx-auto sm:h-[600px] h-[700px] bg-gradient-to-b from-gray-950 to-gray-800 gap-8 relative">
      <p className="text-white sm:text-7xl text-3xl font-semibold">Welcome to <span className="text-orange-600" style={{ fontFamily: "Merriweather, serif", fontWeight: 600, fontStyle: "medium" }}>I'm Future</span></p>
      <p className="sm:text-2xl text-lg text-white text-center sm:w-[1000px] w-96 sm:p-0 px-4">At <span className="text-orange-600" style={{ fontFamily: "Merriweather, serif", fontWeight: 600, fontStyle: "medium" }}>I'm Future</span>, we specialize in cutting-edge IT solutions,
        including web and app development, cloud computing, AI-driven solutions,
        and cybersecurity. Our expert team is dedicated to transforming
        businesses with scalable, secure, and innovative digital solutions.
      </p>
      <p className="sm:text-4xl text-2xl text-white">Our Aim : <span className="sm:text-4xl text-2xl text-orange-600">Empowering Businesses with Cutting-Edge Technology</span></p>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
        <p className="sm:text-2xl text-lg text-black p-2 sm:px-10 px-5 rounded-4xl bg-orange-600 font-semibold cursor-pointer hover:bg-orange-500 transition-colors duration-300">Get a Free Consultation</p>
        <AnchorLink className="anchor-link" href="#contact"><p className="sm:text-2xl text-lg text-black p-2 sm:px-10 px-5 rounded-4xl bg-orange-600 font-semibold cursor-pointer hover:bg-orange-500 transition-colors duration-300">Contact Us</p></AnchorLink>
      </div>
      <div className="fixed right-1 bottom-5 z-50">
      {
        activeChat ?
        (
          <div className="fles flex-col gap-5 bg-gradient-to-b from-teal-900 to-slate-950 p-3 rounded-xl" onClick={()=>setActiveChat(false)}>

          </div>
        )
        :
        (
          <>
            <img src={ai_chat}  alt="" className="relative w-20 h-20 rounded-3xl transition-transform hover:scale-105 duration-300 cursor-pointer" onClick={()=>setActiveChat(true)} />
            <p className="absolute -left-24 -top-8 text-white font-semibold">Hi I'm your AI assitant</p>
          </>
        )
      }
      </div>
    </div>
  );
};

export default Home;
